import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import RestoreIcon from "@mui/icons-material/Restore";
import { Button, IconButton, TextField } from "@mui/material";
import styles from "./home.module.css";
import withAuth from "../utils/Auth";

function Home() {

    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");

    let handleJoinVideoCall = async () => {
        if (meetingCode.trim().length > 0) {
            navigate(`/video-meeting/${meetingCode}`)
        }
    }

    return (
        <div className={styles.homeContainer}>
            <div className={styles.navBar}>
                <div className={styles.logo}>
                    <h3>V Call</h3>
                </div>
                <div className={styles.navActions}>
                    <Button
                        className={styles.navButton}
                        onClick={() => navigate("/history")} // Assuming a history route or modal later
                    >
                        <RestoreIcon />
                        <span style={{ marginLeft: "5px" }}>History</span>
                    </Button>
                    <Button
                        className={styles.navButton}
                        onClick={() => {
                            localStorage.removeItem("token");
                            navigate("/auth");
                        }}
                    >
                        Logout
                    </Button>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <div className={styles.heroContent}>
                        <h2>Quality Video Meetings. Now Free.</h2>
                        <p>We re-engineered the service we built for secure business meetings, V Call, to make it free and available for all.</p>

                        <div className={styles.inputGroup}>
                            <TextField
                                className={styles.meetingInput}
                                value={meetingCode}
                                onChange={e => setMeetingCode(e.target.value)}
                                label="Enter meeting code"
                                variant="outlined"
                                InputLabelProps={{
                                    style: { color: '#94a3b8' },
                                }}
                                InputProps={{
                                    style: { color: 'white' }
                                }}
                            />
                            <Button
                                className={styles.joinButton}
                                onClick={handleJoinVideoCall}
                                disabled={!meetingCode}
                            >
                                Join
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <img src="/pp.png" alt="Video Call Illustration" />
                </div>
            </div>
        </div>
    );
}

export default withAuth(Home);