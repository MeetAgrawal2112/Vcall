
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// Import icons
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';

// Import the image
import bgImage from '../assets/bg.jpg';

// --- Custom Theme ---
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#3b82f6', // Bright Blue
            light: '#60a5fa',
            dark: '#2563eb',
            contrastText: '#fff',
        },
        secondary: {
            main: '#10b981', // Emerald Green
            light: '#34d399',
            dark: '#059669',
            contrastText: '#fff',
        },
        background: {
            default: '#0f172a', // Slate 900
            paper: '#1e293b', // Slate 800
        },
        text: {
            primary: '#f8fafc',
            secondary: '#94a3b8',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: { fontWeight: 800 },
        h2: { fontWeight: 800 },
        h3: { fontWeight: 700 },
        h4: { fontWeight: 700 },
        h5: { fontWeight: 600 },
        h6: { fontWeight: 600 },
        button: { textTransform: 'none', fontWeight: 600 },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    padding: '10px 24px',
                    fontSize: '1rem',
                },
                containedPrimary: {
                    background: 'linear-gradient(45deg, #2563eb 30%, #3b82f6 90%)',
                    boxShadow: '0 3px 5px 2px rgba(37, 99, 235, .3)',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.1)',
                        },
                        '&:hover fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#3b82f6',
                        },
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                }
            }
        }
    },
});

const featureItems = [
    {
        icon: <SettingsSuggestRoundedIcon fontSize="small" />,
        title: 'High Performance',
        description: 'Blazing fast connectivity for your video calls.'
    },
    {
        icon: <ConstructionRoundedIcon fontSize="small" />,
        title: 'Robust Security',
        description: 'End-to-end encryption for your privacy.'
    },
    {
        icon: <ThumbUpAltRoundedIcon fontSize="small" />,
        title: 'User Friendly',
        description: 'Intuitive interface for a seamless experience.'
    },
    {
        icon: <AutoFixHighRoundedIcon fontSize="small" />,
        title: 'Smart Features',
        description: 'AI-powered background blur and noise cancellation.'
    }
];

export default function Authentication() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [error, setError] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [formState, setFormState] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);

    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    const handleAuth = async () => {
        try {
            if (formState === 0) {
                let result = await handleLogin(username, password);
                if (result) {
                    setMessage(result.message || "Logged in successfully!");
                    setOpen(true);
                    // router("/home"); // Uncomment this when you have a home page
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
            } else if (err.message === "Network Error") {
                setError("Cannot connect to server. Check CORS settings or if backend is running.");
            } else {
                setError("An error occurred. Please try again.");
            }
        }
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <Grid container component="main" sx={{ height: '100vh', width: '100%', m: 0, p: 0, overflow: 'hidden' }}>
                <CssBaseline />

                {/* Left Side: Features & Branding */}
                <Grid
                    item
                    xs={12}
                    sm={4}
                    md={7}
                    sx={{
                        position: 'relative',
                        backgroundImage: `url(${bgImage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) => t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.7) 100%)',
                            zIndex: 1
                        }
                    }}
                >
                    <Box sx={{
                        position: 'relative',
                        zIndex: 2,
                        maxWidth: 600,
                        p: 4,
                        color: 'white',
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column'
                    }}>
                        <Box sx={{ mb: 6 }}>
                            <Typography variant="overline" sx={{ letterSpacing: 2, color: 'secondary.main', fontWeight: 700 }}>
                                CONNECT • COLLABORATE • CREATE
                            </Typography>
                            <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mt: 1, mb: 2, background: 'linear-gradient(45deg, #fff 30%, #94a3b8 90%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                V Call
                            </Typography>
                            <Typography variant="h5" sx={{ color: 'text.secondary', fontWeight: 400, lineHeight: 1.6 }}>
                                Experience the future of video communication. Crystal clear audio, HD video, and seamless screen sharing.
                            </Typography>
                        </Box>

                        <Grid container spacing={4}>
                            {featureItems.map((item, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <Box sx={{
                                        p: 2,
                                        borderRadius: 2,
                                        backgroundColor: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        transition: 'transform 0.2s',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            backgroundColor: 'rgba(255,255,255,0.06)'
                                        }
                                    }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, color: 'primary.light' }}>
                                            {item.icon}
                                            <Typography variant="h6" sx={{ ml: 1.5, fontSize: '1rem' }}>
                                                {item.title}
                                            </Typography>
                                        </Box>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {item.description}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Box sx={{ position: 'relative', zIndex: 2, display: { xs: 'block', sm: 'none' }, textAlign: 'center', p: 2 }}>
                        <Typography variant="h3" sx={{ fontWeight: 800, color: 'white' }}>V Call</Typography>
                    </Box>
                </Grid>

                {/* Right Side: Auth Form */}
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'background.default',
                    position: 'relative'
                }}>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '100%',
                            maxWidth: 450,
                            p: 4,
                            borderRadius: 4,
                            backgroundColor: { xs: 'transparent', sm: 'rgba(30, 41, 59, 0.5)' }, // Subtle card on desktop
                            backdropFilter: { sm: 'blur(10px)' },
                            border: { sm: '1px solid rgba(255,255,255,0.05)' }
                        }}
                    >
                        <Avatar sx={{
                            m: 1,
                            bgcolor: 'primary.main',
                            width: 56,
                            height: 56,
                            boxShadow: '0 0 20px rgba(37, 99, 235, 0.5)'
                        }}>
                            <LockOutlinedIcon fontSize="large" />
                        </Avatar>

                        <Typography component="h1" variant="h4" sx={{ mt: 2, mb: 1 }}>
                            {formState === 0 ? "Welcome Back" : "Create Account"}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, textAlign: 'center' }}>
                            {formState === 0 ? "Enter your credentials to access your account." : "Get started with your free account today."}
                        </Typography>

                        <Box sx={{
                            display: 'flex',
                            mb: 4,
                            bgcolor: 'rgba(255,255,255,0.05)',
                            p: 0.5,
                            borderRadius: 3
                        }}>
                            <Button
                                variant={formState === 0 ? "contained" : "text"}
                                onClick={() => { setFormState(0); setError(""); }}
                                sx={{
                                    borderRadius: 2.5,
                                    px: 4,
                                    color: formState === 0 ? 'white' : 'text.secondary',
                                    boxShadow: formState === 0 ? '0 1px 3px rgba(0,0,0,0.2)' : 'none',
                                    '&:hover': { bgcolor: formState === 0 ? 'primary.dark' : 'rgba(255,255,255,0.05)' }
                                }}
                            >
                                Sign In
                            </Button>
                            <Button
                                variant={formState === 1 ? "contained" : "text"}
                                onClick={() => { setFormState(1); setError(""); }}
                                sx={{
                                    borderRadius: 2.5,
                                    px: 4,
                                    color: formState === 1 ? 'white' : 'text.secondary',
                                    boxShadow: formState === 1 ? '0 1px 3px rgba(0,0,0,0.2)' : 'none',
                                    '&:hover': { bgcolor: formState === 1 ? 'primary.dark' : 'rgba(255,255,255,0.05)' }
                                }}
                            >
                                Sign Up
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
                                    InputLabelProps={{ shrink: true }}
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
                                InputLabelProps={{ shrink: true }}
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
                                InputLabelProps={{ shrink: true }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                                sx={{ color: 'text.secondary' }}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            {error && (
                                <Box sx={{
                                    mt: 2,
                                    p: 1.5,
                                    bgcolor: 'rgba(239, 68, 68, 0.1)',
                                    border: '1px solid rgba(239, 68, 68, 0.2)',
                                    borderRadius: 1,
                                    textAlign: 'center'
                                }}>
                                    <Typography color="error" variant="body2">{error}</Typography>
                                </Box>
                            )}

                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                size="large"
                                sx={{ mt: 4, mb: 3 }}
                                onClick={handleAuth}
                            >
                                {formState === 0 ? "Login" : "Create Account"}
                            </Button>

                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Typography variant="body2" color="text.secondary">
                                        {formState === 0 ? "Don't have an account? " : "Already have an account? "}
                                        <Link
                                            component="button"
                                            variant="body2"
                                            onClick={() => { setFormState(formState === 0 ? 1 : 0); setError(""); }}
                                            sx={{
                                                color: 'primary.light',
                                                textDecoration: 'none',
                                                fontWeight: 600,
                                                '&:hover': { textDecoration: 'underline' }
                                            }}
                                        >
                                            {formState === 0 ? "Sign Up" : "Sign In"}
                                        </Link>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                    <Box sx={{ position: 'absolute', bottom: 16, width: '100%', textAlign: 'center', opacity: 0.5 }}>
                        <Typography variant="caption" color="text.secondary">
                            © {new Date().getFullYear()} V Call. All rights reserved.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

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