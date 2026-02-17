import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import withAuth from '../utils/Auth';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import styles from './home.module.css'; // Reusing home styles for consistency

function PreviousMeet() {

    const { getHistoryOfUser } = useContext(AuthContext);
    const [meetings, setMeetings] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch (error) {
                console.log(error);
            }
        }
        fetchHistory()
    }, [])

    return (
        <div className={styles.homeContainer} style={{ overflowY: 'auto' }}>
            <div className={styles.navBar}>
                <div className={styles.logo} style={{ cursor: 'pointer' }} onClick={() => navigate('/home')}>
                    <h3>V Call History</h3>
                </div>
            </div>

            <div style={{ padding: '2rem 4rem' }}>
                <Typography variant="h4" style={{ color: 'white', marginBottom: '2rem' }}>Meeting History</Typography>

                <Grid container spacing={3}>
                    {meetings.length > 0 ? meetings.map((meet, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <Card style={{ backgroundColor: '#2b2b2b', color: 'white' }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Date: {new Date(meet.date).toLocaleDateString()}
                                    </Typography>
                                    <Typography variant="body1">
                                        Meeting Code: {meet.meetingCode}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )) : (
                        <Typography variant="body1" style={{ color: '#94a3b8' }}>No meeting history found.</Typography>
                    )}
                </Grid>
            </div>
        </div>
    )
}

export default withAuth(PreviousMeet);
