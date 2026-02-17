
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import styles from './home.module.css';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#6366f1',
            light: '#818cf8',
            dark: '#4f46e5',
            contrastText: '#fff',
        },
        background: {
            default: '#0f172a',
            paper: 'rgba(30, 41, 59, 0.7)',
        },
        text: {
            primary: '#f8fafc',
            secondary: '#94a3b8',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        button: { textTransform: 'none', fontWeight: 600 },
    },
    shape: {
        borderRadius: 16,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    padding: '10px 24px',
                    fontSize: '1rem',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                },
                containedPrimary: {
                    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                    boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)',
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(168, 85, 247, 0.5)',
                    }
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '14px',
                        '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.08)',
                        },
                        '&:hover fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#6366f1',
                            borderWidth: '2px',
                        },
                    },
                },
            },
        },
    },
});

export default function Authentication() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [error, setError] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [formState, setFormState] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);

    const navigate = useNavigate();
    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    React.useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/home");
        }
    }, [])

    const handleAuth = async () => {
        try {
            if (formState === 0) {
                let result = await handleLogin(username, password);
                if (result) {
                    setMessage(result.message || "Logged in successfully!");
                    setOpen(true);
                    setTimeout(() => {
                        navigate("/home");
                    }, 1000);
                }
            } else {
                let result = await handleRegister(name, username, password);
                setUsername("");
                setMessage(result);
                setOpen(true);
                setError("");
                setFormState(0);
                setPassword("");
            }
        } catch (err) {
            console.error("Auth error:", err);
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError("An error occurred. Please try again.");
            }
        }
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <div className={styles.homeContainer}>
                <CssBaseline />

                {/* Navbar with V Call Logo */}
                <div className={styles.navBar}>
                    <div className={styles.logo} onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                        <h3>V Call</h3>
                    </div>
                </div>

                {/* Centered Auth Card */}
                <div className={styles.container} style={{ justifyContent: 'center' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '100%',
                            maxWidth: 480,
                            p: { xs: 3, md: 6 },
                            borderRadius: 8,
                            backgroundColor: 'rgba(30, 41, 59, 0.4)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 20px rgba(99, 102, 241, 0.1)'
                        }}
                    >
                        <Avatar sx={{
                            m: 1,
                            background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                            width: 64,
                            height: 64,
                            boxShadow: '0 8px 16px rgba(99, 102, 241, 0.4)'
                        }}>
                            <LockOutlinedIcon fontSize="large" />
                        </Avatar>

                        <Typography component="h1" variant="h4" sx={{
                            mt: 3,
                            mb: 1,
                            fontWeight: 900,
                            background: 'linear-gradient(to right, #ffffff, #94a3b8)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            letterSpacing: '-1px'
                        }}>
                            {formState === 0 ? "Sign In" : "Sign Up"}
                        </Typography>

                        <Box sx={{
                            display: 'flex',
                            mb: 4,
                            bgcolor: 'rgba(255,255,255,0.04)',
                            p: 0.6,
                            borderRadius: 4,
                            width: '100%',
                            mt: 2
                        }}>
                            <Button
                                variant={formState === 0 ? "contained" : "text"}
                                fullWidth
                                onClick={() => { setFormState(0); setError(""); }}
                                sx={{
                                    borderRadius: 3,
                                    color: formState === 0 ? 'white' : 'text.secondary',
                                    bgcolor: formState === 0 ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                                    '&:hover': { bgcolor: formState === 0 ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255,255,255,0.05)' }
                                }}
                            >
                                Login
                            </Button>
                            <Button
                                variant={formState === 1 ? "contained" : "text"}
                                fullWidth
                                onClick={() => { setFormState(1); setError(""); }}
                                sx={{
                                    borderRadius: 3,
                                    color: formState === 1 ? 'white' : 'text.secondary',
                                    bgcolor: formState === 1 ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                                    '&:hover': { bgcolor: formState === 1 ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255,255,255,0.05)' }
                                }}
                            >
                                Register
                            </Button>
                        </Box>

                        <Box component="form" noValidate sx={{ width: '100%' }}>
                            {formState === 1 && (
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="fullname"
                                    label="Full Name"
                                    name="fullname"
                                    placeholder="John Doe"
                                    value={name}
                                    autoFocus
                                    onChange={(e) => setName(e.target.value)}
                                    sx={{ mb: 2 }}
                                />
                            )}

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                placeholder="johndoe123"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                sx={{ mb: 2 }}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                                sx={{ color: 'text.secondary' }}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ mb: 2 }}
                            />

                            {error && (
                                <Box sx={{
                                    mt: 2,
                                    p: 2,
                                    bgcolor: 'rgba(239, 68, 68, 0.1)',
                                    border: '1px solid rgba(239, 68, 68, 0.2)',
                                    borderRadius: 2,
                                    textAlign: 'center'
                                }}>
                                    <Typography color="error" variant="body2" sx={{ fontWeight: 600 }}>{error}</Typography>
                                </Box>
                            )}

                            <Button
                                className={styles.joinButton}
                                type="button"
                                fullWidth
                                variant="contained"
                                size="large"
                                sx={{
                                    mt: 4,
                                    mb: 3,
                                    py: 1.8,
                                    fontSize: '1.1rem !important',
                                    fontWeight: '800 !important'
                                }}
                                onClick={handleAuth}
                            >
                                {formState === 0 ? "Sign In" : "Sign Up"}
                            </Button>

                            <Box sx={{ textAlign: 'center', mt: 2 }}>
                                <Typography variant="body2" color="text.secondary">
                                    {formState === 0 ? "Don't have an account? " : "Already have an account? "}
                                    <Link
                                        component="button"
                                        variant="body2"
                                        onClick={() => { setFormState(formState === 0 ? 1 : 0); setError(""); }}
                                        sx={{
                                            color: 'primary.light',
                                            textDecoration: 'none',
                                            fontWeight: 700,
                                            '&:hover': { textDecoration: 'underline' }
                                        }}
                                    >
                                        {formState === 0 ? "Register" : "Login"}
                                    </Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </div>

                {/* Bottom Copyright */}
                <Box sx={{
                    position: 'absolute',
                    bottom: 24,
                    width: '100%',
                    textAlign: 'center',
                    opacity: 0.5
                }}>
                    <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: 1 }}>
                        © {new Date().getFullYear()} V CALL • PREMIUM VIDEO MEETINGS
                    </Typography>
                </Box>
            </div>

            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={() => setOpen(false)}
                message={message}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />
        </ThemeProvider>
    );
}