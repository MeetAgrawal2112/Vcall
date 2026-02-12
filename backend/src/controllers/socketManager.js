import { Server } from "socket.io";

let connections = {};
let messages = {};
let timeOnline = {};

const connectToSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
            credentials: true,
            allowedHeaders: ["*"]
        }
    });
    io.on("connection", (socket) => {

        console.log("Something Connected");

        console.log("User connected", socket.id);

        socket.on("join-call", (path) => {

            if (connections[path] === undefined) {
                connections[path] = []
            }
            connections[path].push(socket.id)
            timeOnline[socket.id] = new Date()

            for (let a = 0; a < connections[path].length; a++) {
                io.to(connections[path][a]).emit("user-joined", socket.id, connections[path]);
            }

            // if (messages[path] !== undefined) {
            //     io.to(socket.id).emit("chat-message", messages[path][a]['data'], messages[path][a]['sender'], messages[path][a]['socket-id-sender']);
            // }

            if (messages[path] !== undefined) {
                messages[path].forEach(msg => {
                    io.to(socket.id).emit("chat-message", msg.data, msg.sender, msg['socket-id-sender']);
                });
            }


        });
        socket.on("signal", (toId, message) => {
            io.to(toId).emit("signal", socket.id, message);
        });
        socket.on("chat-message", (data, sender) => {

            const [matchingRoom, found] = Object.entries(connections)
                .reduce(([room, isFound], [roomKey, roomValue]) => {
                    if (!isFound && roomValue.includes(socket.id)) {
                        return [roomKey, true]
                    }
                    return [room, isFound]
                }, ['', false])

            if (found === true) {
                if (messages[matchingRoom] === undefined) {
                    messages[matchingRoom] = []
                }
                messages[matchingRoom].push({
                    data: data,
                    sender: sender,
                    'socket-id-sender': socket.id
                })


                // matchingRoom

                console.log("message:", matchingRoom, ":", sender, ":", data);

                connections[matchingRoom].forEach((elem) => {
                    if (elem !== socket.id) {
                        io.to(elem).emit("chat-message", data, sender, socket.id);
                    }
                })
            }

        });
        // socket.on("disconnect", () => {

        //     var diffTime=Math.abs(timeOnline[socket.id]-new Date());
        //     console.log("User disconnected",diffTime);
        //     var key;
        //     for(const[k,v]  of JSON.parse(JSON.stringify(Object.entries(connections))))
        //         for(let a=0;a<v.length;a++){
        //             if(v[a]===socket.id){
        //                 key=k;
        //                 for (let a=0;a<connections[key].length;a++){
        //                     io.to(connections[key][a]).emit("user-left",socket.id);
        //                 }
        //                 var index=connections[key].indexOf(socket.id);
        //                 connections[key].splice(index,1);
        //                 if(connections[key].length===0){
        //                     delete connections[key];
        //                 }
        //             }
        //         }
        // }

        socket.on("disconnect", () => {
    // Calculate online time safely
    if (timeOnline[socket.id]) {
        const diffTime = Math.abs(new Date() - timeOnline[socket.id]);
        console.log("User disconnected, online for (ms):", diffTime);
        delete timeOnline[socket.id]; // cleanup
    } else {
        console.log("User disconnected:", socket.id);
    }

    let roomKey = null;

    // Find which room the socket was in
    for (const [k, v] of Object.entries(connections)) {
        if (v.includes(socket.id)) {
            roomKey = k;
            break;
        }
    }

    if (roomKey) {
        // Notify all users in that room that this user left
        connections[roomKey].forEach((sid) => {
            io.to(sid).emit("user-left", socket.id);
        });

        // Remove user from room
        const index = connections[roomKey].indexOf(socket.id);
        if (index !== -1) {
            connections[roomKey].splice(index, 1);
        }

        // If room is empty, delete it
        if (connections[roomKey].length === 0) {
            delete connections[roomKey];
        }
    }
});

    });
    return io;
}

export default connectToSocket