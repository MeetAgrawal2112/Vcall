import React, { useEffect, useRef, useState } from 'react'
import "../styles/videoMeet.css"
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const serverUrl = "http://localhost:8000";

var connections = {}

const peerConfigConnections = {
    "iceServers": [
        { "urls": "stun:stun.l.google.com:19302" }
    ]
}


function VideoMeetingComponent() {

    var socketRef = useRef();
    let socketIdRef = useRef();

    let localVideoRef = useRef();
    let [videoAvailable, setVideoAvailable] = useState(true);
    let [audioAvailable, setAudioAvailable] = useState(true);
    let [video, setVideo] = useState();
    let [audio, setAudio] = useState();

    let [screen, setScreen] = useState();
    let [screenModal, setScreenModal] = useState();
    let [screenAvailable, setScreenAvailable] = useState();
    let [messages, setMessages] = useState([]);
    let [message, setMessage] = useState("");
    let [newMessages, setNewMessages] = useState(0);
    let [askForUserName, setAskForUserName] = useState(true);
    let [username, setUsername] = useState("");
    const videoRef = useRef([]);
    let [videos, setVideos] = useState([])

    

    useEffect(()=>{

    },[])

    return (
        <div className="videoMeetingContainer">

            {
                askForUserName === true ?
                    <div>
                        <h2>Enter into Lobby</h2>
                        <TextField id="outlined-basic" label="Username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <Button variant="contained">Contained</Button>


                        <div className="video">
                            <video ref={localVideoRef} autoPlay muted></video>
                        </div>

                    </div>
                    :
                    <div></div>
            }

        </div>
    )
}

export default VideoMeetingComponent