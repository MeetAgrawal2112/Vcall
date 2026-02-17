import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import withAuth from '../utils/Auth';
import { Card, CardContent, Typography, Grid, IconButton, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './home.module.css';

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
                <div className={styles.logo} onClick={() => navigate('/home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <IconButton size="small" sx={{ color: 'white', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <ArrowBackIcon fontSize="small" />
                    </IconButton>
                    <h3>V Call History</h3>
                </div>
            </div>

            <div style={{ padding: '3rem 5rem' }}>
                <Typography variant="h3" sx={{
                    color: 'white',
                    fontWeight: 900,
                    marginBottom: '3rem',
                    background: 'linear-gradient(to right, #ffffff, #94a3b8)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-1px'
                }}>
                    Meeting History
                </Typography>

                <Grid container spacing={4}>
                    {meetings.length > 0 ? meetings.map((meet, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <Card sx={{
                                background: 'rgba(30, 41, 59, 0.4)',
                                backdropFilter: 'blur(16px)',
                                borderRadius: '24px',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                color: 'white',
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    borderColor: 'rgba(99, 102, 241, 0.4)',
                                    boxShadow: '0 15px 40px rgba(0,0,0,0.4), 0 0 15px rgba(99, 102, 241, 0.1)'
                                }
                            }}>
                                <CardContent sx={{ p: 4 }}>
                                    <Typography variant="overline" sx={{ color: 'primary.light', fontWeight: 800, letterSpacing: 1 }}>
                                        {new Date(meet.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                    </Typography>
                                    <Typography variant="h5" sx={{ mt: 1, mb: 2, fontWeight: 800, letterSpacing: '-0.5px' }}>
                                        Meeting Code: <span style={{ color: '#6366f1' }}>{meet.meeting_code}</span>
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', opacity: 0.8 }}>
                                        Successfully connected and recorded in history.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )) : (
                        <Grid item xs={12}>
                            <Box sx={{ textAlign: 'center', py: 10 }}>
                                <Typography variant="h5" style={{ color: '#94a3b8' }}>No meeting history found.</Typography>
                            </Box>
                        </Grid>
                    )}
                </Grid>
            </div>
        </div>
    )
}

export default withAuth(PreviousMeet);
