import express from 'express'
import { createServer } from 'node:http'

import connectToSocket from './controllers/socketManager.js'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from "./routes/users.routes.js"



const app = express();
const server = createServer(app);
const io = connectToSocket(server);
app.set("port", process.env.PORT || 8000)
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json({ limit: "50kb" }))
app.use(express.urlencoded({ extended: true, limit: "50kb" }))

app.use("/api/v1/users", userRoutes)

const start = async () => {
    const ConnectionDB = await mongoose.connect("mongodb+srv://maagrawal2112_db_user:VideoCall@cluster0.apyr3dm.mongodb.net/");
    console.log(`MongoDb Connected To Host : ${ConnectionDB.connection.host}`)
    server.listen(app.get("port"), () => {
        console.log(`Server is running on port : ${app.get("port")}`);
    })
}

start()