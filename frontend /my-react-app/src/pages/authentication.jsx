// // import React from "react";


// // export default function authentication() {
// //     return (
// //         <div>
// //             <h1>Authentication</h1>
// //         </div>
// //     )
// // }


// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { ThemeProvider, createTheme, useColorScheme, alpha } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import MuiCard from '@mui/material/Card';
// import Checkbox from '@mui/material/Checkbox';
// import Divider from '@mui/material/Divider';
// import FormLabel from '@mui/material/FormLabel';
// import FormControl from '@mui/material/FormControl';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Link from '@mui/material/Link';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import SvgIcon from '@mui/material/SvgIcon';
// import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
// import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
// import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
// import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
// import './auth.css';

// // ============================================================================
// // THEME PRIMITIVES
// // ============================================================================

// const defaultTheme = createTheme();
// const customShadows = [...defaultTheme.shadows];

// const brand = {
//     50: 'hsl(210, 100%, 95%)',
//     100: 'hsl(210, 100%, 92%)',
//     200: 'hsl(210, 100%, 80%)',
//     300: 'hsl(210, 100%, 65%)',
//     400: 'hsl(210, 98%, 48%)',
//     500: 'hsl(210, 98%, 42%)',
//     600: 'hsl(210, 98%, 55%)',
//     700: 'hsl(210, 100%, 35%)',
//     800: 'hsl(210, 100%, 16%)',
//     900: 'hsl(210, 100%, 21%)',
// };

// const gray = {
//     50: 'hsl(220, 35%, 97%)',
//     100: 'hsl(220, 30%, 94%)',
//     200: 'hsl(220, 20%, 88%)',
//     300: 'hsl(220, 20%, 80%)',
//     400: 'hsl(220, 20%, 65%)',
//     500: 'hsl(220, 20%, 42%)',
//     600: 'hsl(220, 20%, 35%)',
//     700: 'hsl(220, 20%, 25%)',
//     800: 'hsl(220, 30%, 6%)',
//     900: 'hsl(220, 35%, 3%)',
// };

// const green = {
//     50: 'hsl(120, 80%, 98%)',
//     100: 'hsl(120, 75%, 94%)',
//     200: 'hsl(120, 75%, 87%)',
//     300: 'hsl(120, 61%, 77%)',
//     400: 'hsl(120, 44%, 53%)',
//     500: 'hsl(120, 59%, 30%)',
//     600: 'hsl(120, 70%, 25%)',
//     700: 'hsl(120, 75%, 16%)',
//     800: 'hsl(120, 84%, 10%)',
//     900: 'hsl(120, 87%, 6%)',
// };

// const orange = {
//     50: 'hsl(45, 100%, 97%)',
//     100: 'hsl(45, 92%, 90%)',
//     200: 'hsl(45, 94%, 80%)',
//     300: 'hsl(45, 90%, 65%)',
//     400: 'hsl(45, 90%, 40%)',
//     500: 'hsl(45, 90%, 35%)',
//     600: 'hsl(45, 91%, 25%)',
//     700: 'hsl(45, 94%, 20%)',
//     800: 'hsl(45, 95%, 16%)',
//     900: 'hsl(45, 93%, 12%)',
// };

// const red = {
//     50: 'hsl(0, 100%, 97%)',
//     100: 'hsl(0, 92%, 90%)',
//     200: 'hsl(0, 94%, 80%)',
//     300: 'hsl(0, 90%, 65%)',
//     400: 'hsl(0, 90%, 40%)',
//     500: 'hsl(0, 90%, 30%)',
//     600: 'hsl(0, 91%, 25%)',
//     700: 'hsl(0, 94%, 18%)',
//     800: 'hsl(0, 95%, 12%)',
//     900: 'hsl(0, 93%, 6%)',
// };

// const colorSchemes = {
//     light: {
//         palette: {
//             primary: {
//                 light: brand[200],
//                 main: brand[400],
//                 dark: brand[700],
//                 contrastText: brand[50],
//             },
//             info: {
//                 light: brand[100],
//                 main: brand[300],
//                 dark: brand[600],
//                 contrastText: gray[50],
//             },
//             warning: {
//                 light: orange[300],
//                 main: orange[400],
//                 dark: orange[800],
//             },
//             error: {
//                 light: red[300],
//                 main: red[400],
//                 dark: red[800],
//             },
//             success: {
//                 light: green[300],
//                 main: green[400],
//                 dark: green[800],
//             },
//             grey: {
//                 ...gray,
//             },
//             divider: alpha(gray[300], 0.4),
//             background: {
//                 default: 'hsl(0, 0%, 99%)',
//                 paper: 'hsl(220, 35%, 97%)',
//             },
//             text: {
//                 primary: gray[800],
//                 secondary: gray[600],
//                 warning: orange[400],
//             },
//             action: {
//                 hover: alpha(gray[200], 0.2),
//                 selected: `${alpha(gray[200], 0.3)}`,
//             },
//             baseShadow:
//                 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px',
//         },
//     },
//     dark: {
//         palette: {
//             primary: {
//                 contrastText: brand[50],
//                 light: brand[300],
//                 main: brand[400],
//                 dark: brand[700],
//             },
//             info: {
//                 contrastText: brand[300],
//                 light: brand[500],
//                 main: brand[700],
//                 dark: brand[900],
//             },
//             warning: {
//                 light: orange[400],
//                 main: orange[500],
//                 dark: orange[700],
//             },
//             error: {
//                 light: red[400],
//                 main: red[500],
//                 dark: red[700],
//             },
//             success: {
//                 light: green[400],
//                 main: green[500],
//                 dark: green[700],
//             },
//             grey: {
//                 ...gray,
//             },
//             divider: alpha(gray[700], 0.6),
//             background: {
//                 default: gray[900],
//                 paper: 'hsl(220, 30%, 7%)',
//             },
//             text: {
//                 primary: 'hsl(0, 0%, 100%)',
//                 secondary: gray[400],
//             },
//             action: {
//                 hover: alpha(gray[600], 0.2),
//                 selected: alpha(gray[600], 0.3),
//             },
//             baseShadow:
//                 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px',
//         },
//     },
// };

// const typography = {
//     fontFamily: 'Inter, sans-serif',
//     h1: {
//         fontSize: defaultTheme.typography.pxToRem(48),
//         fontWeight: 600,
//         lineHeight: 1.2,
//         letterSpacing: -0.5,
//     },
//     h2: {
//         fontSize: defaultTheme.typography.pxToRem(36),
//         fontWeight: 600,
//         lineHeight: 1.2,
//     },
//     h3: {
//         fontSize: defaultTheme.typography.pxToRem(30),
//         lineHeight: 1.2,
//     },
//     h4: {
//         fontSize: defaultTheme.typography.pxToRem(24),
//         fontWeight: 600,
//         lineHeight: 1.5,
//     },
//     h5: {
//         fontSize: defaultTheme.typography.pxToRem(20),
//         fontWeight: 600,
//     },
//     h6: {
//         fontSize: defaultTheme.typography.pxToRem(18),
//         fontWeight: 600,
//     },
//     subtitle1: {
//         fontSize: defaultTheme.typography.pxToRem(18),
//     },
//     subtitle2: {
//         fontSize: defaultTheme.typography.pxToRem(14),
//         fontWeight: 500,
//     },
//     body1: {
//         fontSize: defaultTheme.typography.pxToRem(14),
//     },
//     body2: {
//         fontSize: defaultTheme.typography.pxToRem(14),
//         fontWeight: 400,
//     },
//     caption: {
//         fontSize: defaultTheme.typography.pxToRem(12),
//         fontWeight: 400,
//     },
// };

// const shape = {
//     borderRadius: 8,
// };

// const defaultShadows = [
//     'none',
//     'var(--template-palette-baseShadow)',
//     ...defaultTheme.shadows.slice(2),
// ];

// const shadows = defaultShadows;

// // ============================================================================
// // CUSTOM ICONS
// // ============================================================================

// function SitemarkIcon() {
//     return (
//         <SvgIcon sx={{ height: 21, width: 100, mr: 2 }}>
//             <svg
//                 width={86}
//                 height={19}
//                 viewBox="0 0 86 19"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//             >
//                 <path
//                     fill="#B4C0D3"
//                     d="m.787 12.567 6.055-2.675 3.485 2.006.704 6.583-4.295-.035.634-4.577-.74-.422-3.625 2.817-2.218-3.697Z"
//                 />
//                 <path
//                     fill="#00D3AB"
//                     d="m10.714 11.616 5.352 3.908 2.112-3.767-4.295-1.725v-.845l4.295-1.76-2.112-3.732-5.352 3.908v4.013Z"
//                 />
//                 <path
//                     fill="#4876EF"
//                     d="m10.327 7.286.704-6.583-4.295.07.634 4.577-.74.422-3.66-2.816L.786 6.617l6.055 2.676 3.485-2.007Z"
//                 />
//                 <path
//                     fill="#4876EE"
//                     d="M32.507 8.804v6.167h2.312v-7.86h-3.366v1.693h1.054ZM32.435 6.006c.212.22.535.33.968.33.434 0 .751-.11.953-.33.213-.23.318-.516.318-.86 0-.354-.105-.641-.318-.86-.202-.23-.52-.345-.953-.345-.433 0-.756.115-.968.344-.202.22-.303.507-.303.86 0 .345.101.632.303.861ZM24.46 14.799c.655.296 1.46.444 2.413.444.896 0 1.667-.139 2.312-.416.645-.277 1.141-.664 1.488-1.162.357-.506.535-1.094.535-1.764 0-.65-.169-1.2-.506-1.649-.328-.459-.785-.818-1.373-1.076-.587-.267-1.266-.435-2.037-.502l-.809-.071c-.481-.039-.828-.168-1.04-.388a1.08 1.08 0 0 1-.318-.774c0-.23.058-.44.173-.631.116-.201.29-.359.52-.474.241-.114.535-.172.882-.172.366 0 .67.067.91.201.053.029.104.059.15.09l.012.009.052.037c.146.111.263.243.35.395.125.21.188.444.188.703h2.311c0-.689-.159-1.286-.476-1.793-.318-.516-.776-.913-1.373-1.19-.588-.287-1.296-.43-2.124-.43-.79 0-1.474.133-2.052.4a3.131 3.131 0 0 0-1.358 1.12c-.318.487-.477 1.066-.477 1.735 0 .927.314 1.673.94 2.237.626.564 1.464.89 2.514.976l.794.071c.645.058 1.113.187 1.401.388a.899.899 0 0 1 .434.788 1.181 1.181 0 0 1-.231.717c-.154.201-.38.36-.68.474-.298.115-.669.172-1.112.172-.49 0-.89-.067-1.199-.2-.308-.144-.539-.33-.694-.56a1.375 1.375 0 0 1-.216-.746h-2.297c0 .679.168 1.281.505 1.807.337.517.834.928 1.489 1.234ZM39.977 15.07c-.8 0-1.445-.095-1.936-.286a2.03 2.03 0 0 1-1.084-.99c-.221-.469-.332-1.1-.332-1.893V8.789h-1.2V7.11h1.2V4.988h2.153V7.11h2.312V8.79h-2.312v3.198c0 .373.096.66.289.86.202.192.486.287.852.287h1.17v1.937h-1.112Z"
//                 />
//                 <path
//                     fill="#4876EE"
//                     fillRule="evenodd"
//                     d="M43.873 14.899c.52.23 1.117.344 1.791.344.665 0 1.252-.115 1.763-.344.51-.23.934-.55 1.271-.96.337-.412.564-.88.679-1.407h-2.124c-.096.24-.279.44-.549.603-.27.162-.616.244-1.04.244-.262 0-.497-.031-.704-.093a1.572 1.572 0 0 1-.423-.194 1.662 1.662 0 0 1-.636-.803 3.159 3.159 0 0 1-.163-.645h5.784v-.775a4.28 4.28 0 0 0-.463-1.98 3.686 3.686 0 0 0-1.343-1.477c-.578-.382-1.291-.574-2.139-.574-.645 0-1.223.115-1.733.345-.501.22-.92.52-1.257.903a4.178 4.178 0 0 0-.78 1.305c-.174.478-.26.98-.26 1.506v.287c0 .507.086 1.004.26 1.492.183.478.443.913.78 1.305.347.382.775.688 1.286.918Zm-.094-4.674.02-.09a2.507 2.507 0 0 1 .117-.356c.145-.354.356-.622.636-.804.104-.067.217-.123.339-.165.204-.071.433-.107.686-.107.395 0 .723.09.983.272.27.173.472.426.607.76a2.487 2.487 0 0 1 .16.603h-3.57c.006-.038.013-.076.022-.113Z"
//                     clipRule="evenodd"
//                 />
//                 <path
//                     fill="#4876EE"
//                     d="M50.476 14.97V7.112h1.835v1.98a4.54 4.54 0 0 1 .173-.603c.202-.536.506-.937.91-1.205.405-.277.9-.416 1.488-.416h.101c.598 0 1.094.139 1.489.416.404.268.707.67.91 1.205l.016.04.013.037.028-.077c.212-.536.52-.937.925-1.205.405-.277.901-.416 1.489-.416h.1c.598 0 1.098.139 1.503.416.414.268.727.67.94 1.205.211.535.317 1.205.317 2.008v4.475h-2.312v-4.604c0-.43-.115-.78-.346-1.047-.222-.268-.54-.402-.954-.402-.414 0-.742.139-.982.416-.241.268-.362.626-.362 1.076v4.56h-2.326v-4.603c0-.43-.115-.78-.346-1.047-.222-.268-.535-.402-.94-.402-.423 0-.756.139-.996.416-.241.268-.362.626-.362 1.076v4.56h-2.311Z"
//                 />
//                 <path
//                     fill="#4876EE"
//                     fillRule="evenodd"
//                     d="M68.888 13.456v1.515h1.834v-4.82c0-.726-.144-1.319-.433-1.778-.289-.468-.712-.817-1.271-1.047-.549-.23-1.228-.344-2.037-.344a27.76 27.76 0 0 0-.896.014c-.318.01-.626.024-.924.043l-.229.016a36.79 36.79 0 0 0-.552.042v1.936a81.998 81.998 0 0 1 1.733-.09 37.806 37.806 0 0 1 1.171-.025c.424 0 .732.1.925.301.193.201.289.502.289.904v.029h-1.43c-.704 0-1.325.09-1.864.272-.54.172-.959.445-1.257.818-.299.363-.448.832-.448 1.405 0 .526.12.98.361 1.363.24.373.573.66.997.86.433.201.934.302 1.502.302.55 0 1.012-.1 1.388-.302.385-.2.683-.487.895-.86a2.443 2.443 0 0 0 .228-.498l.018-.056Zm-.39-1.397v-.63h-1.445c-.405 0-.718.1-.939.3-.212.192-.318.455-.318.79 0 .157.026.3.08.429a.99.99 0 0 0 .238.345c.221.191.534.287.939.287a2.125 2.125 0 0 0 .394-.038c.106-.021.206-.052.3-.092.212-.095.385-.253.52-.473.135-.22.212-.526.23-.918Z"
//                     clipRule="evenodd"
//                 />
//                 <path
//                     fill="#4876EE"
//                     d="M72.106 14.97V7.11h1.835v2.595c.088-.74.31-1.338.665-1.791.481-.603 1.174-.904 2.08-.904h.303v1.98h-.578c-.635 0-1.127.172-1.473.516-.347.334-.52.822-.52 1.463v4.001h-2.312ZM79.92 11.298h.767l2.499 3.672h2.6l-3.169-4.51 2.606-3.35h-2.427l-2.875 3.737V4.5h-2.312v10.47h2.312v-3.672Z"
//                 />
//             </svg>
//         </SvgIcon>
//     );
// }

// function FacebookIcon() {
//     return (
//         <SvgIcon>
//             <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 16 16"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//             >
//                 <path
//                     d="M6.68 15.92C2.88 15.24 0 11.96 0 8C0 3.6 3.6 0 8 0C12.4 0 16 3.6 16 8C16 11.96 13.12 15.24 9.32 15.92L8.88 15.56H7.12L6.68 15.92Z"
//                     fill="url(#paint0_linear_795_116)"
//                 />
//                 <path
//                     d="M11.12 10.2391L11.48 7.99914H9.36V6.43914C9.36 5.79914 9.6 5.31914 10.56 5.31914H11.6V3.27914C11.04 3.19914 10.4 3.11914 9.84 3.11914C8 3.11914 6.72 4.23914 6.72 6.23914V7.99914H4.72V10.2391H6.72V15.8791C7.16 15.9591 7.6 15.9991 8.04 15.9991C8.48 15.9991 8.92 15.9591 9.36 15.8791V10.2391H11.12Z"
//                     fill="white"
//                 />
//                 <defs>
//                     <linearGradient
//                         id="paint0_linear_795_116"
//                         x1="8"
//                         y1="0"
//                         x2="8"
//                         y2="15.9991"
//                         gradientUnits="userSpaceOnUse"
//                     >
//                         <stop stopColor="#1AAFFF" />
//                         <stop offset="1" stopColor="#0163E0" />
//                     </linearGradient>
//                 </defs>
//             </svg>
//         </SvgIcon>
//     );
// }

// function GoogleIcon() {
//     return (
//         <SvgIcon>
//             <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 16 16"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//             >
//                 <path
//                     d="M15.68 8.18182C15.68 7.61455 15.6291 7.06909 15.5345 6.54545H8V9.64364H12.3055C12.1164 10.64 11.5491 11.4836 10.6982 12.0509V14.0655H13.2945C14.8073 12.6691 15.68 10.6182 15.68 8.18182Z"
//                     fill="#4285F4"
//                 />
//                 <path
//                     d="M8 16C10.16 16 11.9709 15.2873 13.2945 14.0655L10.6982 12.0509C9.98545 12.5309 9.07636 12.8218 8 12.8218C5.92 12.8218 4.15273 11.4182 3.52 9.52727H0.858182V11.5927C2.17455 14.2036 4.87273 16 8 16Z"
//                     fill="#34A853"
//                 />
//                 <path
//                     d="M3.52 9.52C3.36 9.04 3.26545 8.53091 3.26545 8C3.26545 7.46909 3.36 6.96 3.52 6.48V4.41455H0.858182C0.312727 5.49091 0 6.70545 0 8C0 9.29455 0.312727 10.5091 0.858182 11.5855L2.93091 9.97091L3.52 9.52Z"
//                     fill="#FBBC05"
//                 />
//                 <path
//                     d="M8 3.18545C9.17818 3.18545 10.2255 3.59273 11.0618 4.37818L13.3527 2.08727C11.9636 0.792727 10.16 0 8 0C4.87273 0 2.17455 1.79636 0.858182 4.41455L3.52 6.48C4.15273 4.58909 5.92 3.18545 8 3.18545Z"
//                     fill="#EA4335"
//                 />
//             </svg>
//         </SvgIcon>
//     );
// }

// // ============================================================================
// // COLOR MODE SELECT
// // ============================================================================

// function ColorModeSelect(props) {
//     const { mode, setMode } = useColorScheme();
//     if (!mode) {
//         return null;
//     }
//     return (
//         <Select
//             value={mode}
//             onChange={(event) => setMode(event.target.value)}
//             SelectDisplayProps={{
//                 'data-screenshot': 'toggle-mode',
//             }}
//             {...props}
//         >
//             <MenuItem value="system">System</MenuItem>
//             <MenuItem value="light">Light</MenuItem>
//             <MenuItem value="dark">Dark</MenuItem>
//         </Select>
//     );
// }

// // ============================================================================
// // FORGOT PASSWORD DIALOG
// // ============================================================================

// function ForgotPassword({ open, handleClose }) {
//     return (
//         <Dialog
//             open={open}
//             onClose={handleClose}
//             slotProps={{
//                 paper: {
//                     component: 'form',
//                     onSubmit: (event) => {
//                         event.preventDefault();
//                         handleClose();
//                     },
//                     sx: { backgroundImage: 'none' },
//                 },
//             }}
//         >
//             <DialogTitle>Reset password</DialogTitle>
//             <DialogContent
//                 sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
//             >
//                 <DialogContentText>
//                     Enter your account's email address, and we'll send you a link to
//                     reset your password.
//                 </DialogContentText>
//                 <OutlinedInput
//                     autoFocus
//                     required
//                     margin="dense"
//                     id="email"
//                     name="email"
//                     label="Email address"
//                     placeholder="Email address"
//                     type="email"
//                     fullWidth
//                 />
//             </DialogContent>
//             <DialogActions sx={{ pb: 3, px: 3 }}>
//                 <Button onClick={handleClose}>Cancel</Button>
//                 <Button variant="contained" type="submit">
//                     Continue
//                 </Button>
//             </DialogActions>
//         </Dialog>
//     );
// }

// ForgotPassword.propTypes = {
//     handleClose: PropTypes.func.isRequired,
//     open: PropTypes.bool.isRequired,
// };

// // ============================================================================
// // SIGN IN CARD
// // ============================================================================

// function SignInCard() {
//     const [emailError, setEmailError] = React.useState(false);
//     const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
//     const [passwordError, setPasswordError] = React.useState(false);
//     const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
//     const [open, setOpen] = React.useState(false);

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     const handleSubmit = (event) => {
//         if (emailError || passwordError) {
//             event.preventDefault();
//             return;
//         }
//         const data = new FormData(event.currentTarget);
//         console.log({
//             email: data.get('email'),
//             password: data.get('password'),
//         });
//     };

//     const validateInputs = () => {
//         const email = document.getElementById('email');
//         const password = document.getElementById('password');

//         let isValid = true;

//         if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
//             setEmailError(true);
//             setEmailErrorMessage('Please enter a valid email address.');
//             isValid = false;
//         } else {
//             setEmailError(false);
//             setEmailErrorMessage('');
//         }

//         if (!password.value || password.value.length < 6) {
//             setPasswordError(true);
//             setPasswordErrorMessage('Password must be at least 6 characters long.');
//             isValid = false;
//         } else {
//             setPasswordError(false);
//             setPasswordErrorMessage('');
//         }

//         return isValid;
//     };

//     return (
//         <MuiCard variant="outlined" className="auth-card">
//             <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//                 <SitemarkIcon />
//             </Box>
//             <Typography
//                 component="h1"
//                 variant="h4"
//                 sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
//             >
//                 Sign in
//             </Typography>
//             <Box
//                 component="form"
//                 onSubmit={handleSubmit}
//                 noValidate
//                 sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
//             >
//                 <FormControl>
//                     <FormLabel htmlFor="email">Email</FormLabel>
//                     <TextField
//                         error={emailError}
//                         helperText={emailErrorMessage}
//                         id="email"
//                         type="email"
//                         name="email"
//                         placeholder="your@email.com"
//                         autoComplete="email"
//                         autoFocus
//                         required
//                         fullWidth
//                         variant="outlined"
//                         color={emailError ? 'error' : 'primary'}
//                     />
//                 </FormControl>
//                 <FormControl>
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                         <FormLabel htmlFor="password">Password</FormLabel>
//                         <Link
//                             component="button"
//                             type="button"
//                             onClick={handleClickOpen}
//                             variant="body2"
//                             sx={{ alignSelf: 'baseline' }}
//                         >
//                             Forgot your password?
//                         </Link>
//                     </Box>
//                     <TextField
//                         error={passwordError}
//                         helperText={passwordErrorMessage}
//                         name="password"
//                         placeholder="••••••"
//                         type="password"
//                         id="password"
//                         autoComplete="current-password"
//                         autoFocus
//                         required
//                         fullWidth
//                         variant="outlined"
//                         color={passwordError ? 'error' : 'primary'}
//                     />
//                 </FormControl>
//                 <FormControlLabel
//                     control={<Checkbox value="remember" color="primary" />}
//                     label="Remember me"
//                 />
//                 <ForgotPassword open={open} handleClose={handleClose} />
//                 <Button type="submit" fullWidth variant="contained" onClick={validateInputs}>
//                     Sign in
//                 </Button>
//                 <Typography sx={{ textAlign: 'center' }}>
//                     Don't have an account?{' '}
//                     <span>
//                         <Link
//                             href="/material-ui/getting-started/templates/sign-in/"
//                             variant="body2"
//                             sx={{ alignSelf: 'center' }}
//                         >
//                             Sign up
//                         </Link>
//                     </span>
//                 </Typography>
//             </Box>
//             <Divider>or</Divider>
//             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//                 <Button
//                     fullWidth
//                     variant="outlined"
//                     onClick={() => alert('Sign in with Google')}
//                     startIcon={<GoogleIcon />}
//                 >
//                     Sign in with Google
//                 </Button>
//                 <Button
//                     fullWidth
//                     variant="outlined"
//                     onClick={() => alert('Sign in with Facebook')}
//                     startIcon={<FacebookIcon />}
//                 >
//                     Sign in with Facebook
//                 </Button>
//             </Box>
//         </MuiCard>
//     );
// }

// // ============================================================================
// // CONTENT COMPONENT
// // ============================================================================

// const items = [
//     {
//         icon: <SettingsSuggestRoundedIcon sx={{ color: 'text.secondary' }} />,
//         title: 'Adaptable performance',
//         description:
//             'Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.',
//     },
//     {
//         icon: <ConstructionRoundedIcon sx={{ color: 'text.secondary' }} />,
//         title: 'Built to last',
//         description:
//             'Experience unmatched durability that goes above and beyond with lasting investment.',
//     },
//     {
//         icon: <ThumbUpAltRoundedIcon sx={{ color: 'text.secondary' }} />,
//         title: 'Great user experience',
//         description:
//             'Integrate our product into your routine with an intuitive and easy-to-use interface.',
//     },
//     {
//         icon: <AutoFixHighRoundedIcon sx={{ color: 'text.secondary' }} />,
//         title: 'Innovative functionality',
//         description:
//             'Stay ahead with features that set new standards, addressing your evolving needs better than the rest.',
//     },
// ];

// function Content() {
//     return (
//         <Stack
//             sx={{ flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450 }}
//         >
//             <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//                 <SitemarkIcon />
//             </Box>
//             {items.map((item, index) => (
//                 <Stack key={index} direction="row" sx={{ gap: 2 }}>
//                     {item.icon}
//                     <div>
//                         <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
//                             {item.title}
//                         </Typography>
//                         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                             {item.description}
//                         </Typography>
//                     </div>
//                 </Stack>
//             ))}
//         </Stack>
//     );
// }

// // ============================================================================
// // APP THEME PROVIDER
// // ============================================================================

// function AppTheme(props) {
//     const { children, disableCustomTheme, themeComponents } = props;
//     const theme = React.useMemo(() => {
//         return disableCustomTheme
//             ? {}
//             : createTheme({
//                 cssVariables: {
//                     colorSchemeSelector: 'data-mui-color-scheme',
//                     cssVarPrefix: 'template',
//                 },
//                 colorSchemes,
//                 typography,
//                 shadows,
//                 shape,
//                 components: {
//                     ...themeComponents,
//                 },
//             });
//     }, [disableCustomTheme, themeComponents]);

//     if (disableCustomTheme) {
//         return <React.Fragment>{children}</React.Fragment>;
//     }

//     return (
//         <ThemeProvider theme={theme} disableTransitionOnChange>
//             {children}
//         </ThemeProvider>
//     );
// }

// AppTheme.propTypes = {
//     children: PropTypes.node,
//     disableCustomTheme: PropTypes.bool,
//     themeComponents: PropTypes.object,
// };

// // ============================================================================
// // MAIN SIGN IN SIDE COMPONENT
// // ============================================================================

// export default function SignInSide(props) {
//     return (
//         <AppTheme {...props}>
//             <CssBaseline enableColorScheme />
//             <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
//             <Stack
//                 direction="column"
//                 component="main"
//                 className="auth-main-container"
//             >
//                 <Stack
//                     direction={{ xs: 'column-reverse', md: 'row' }}
//                     sx={{
//                         justifyContent: 'center',
//                         gap: { xs: 6, sm: 12 },
//                         p: 2,
//                         mx: 'auto',
//                     }}
//                 >
//                     <Stack
//                         direction={{ xs: 'column-reverse', md: 'row' }}
//                         sx={{
//                             justifyContent: 'center',
//                             gap: { xs: 6, sm: 12 },
//                             p: { xs: 2, sm: 4 },
//                             m: 'auto',
//                         }}
//                     >
//                         <Content />
//                         <SignInCard />
//                     </Stack>
//                 </Stack>
//             </Stack>
//         </AppTheme>
//     );
// }


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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';

// Import icons
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';

// Import the image directly for reliable Vite processing
import bgImage from '../assets/bg.jpg';

const defaultTheme = createTheme({
    palette: {
        primary: {
            main: '#4876EF',
        },
        secondary: {
            main: '#00D3AB',
        },
    },
});

const featureItems = [
    {
        icon: <SettingsSuggestRoundedIcon />,
        title: 'High Performance',
        description: 'Blazing fast connectivity for your video calls.'
    },
    {
        icon: <ConstructionRoundedIcon />,
        title: 'Robust Security',
        description: 'End-to-end encryption for your privacy.'
    },
    {
        icon: <ThumbUpAltRoundedIcon />,
        title: 'User Friendly',
        description: 'Intuitive interface for a seamless experience.'
    },
    {
        icon: <AutoFixHighRoundedIcon />,
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
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />

                {/* Left Side: Features & Branding */}
                <Grid
                    item
                    xs={12}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) => t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 4
                    }}
                >
                    <Box sx={{ maxWidth: 450, display: { xs: 'none', sm: 'block' } }}>
                        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800, letterSpacing: -1 }}>
                            V Call
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                            Experience the next generation of video communication.
                        </Typography>

                        <Box sx={{ mt: 6 }}>
                            {featureItems.map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', gap: 3, mb: 4 }}>
                                    <Avatar sx={{ bgcolor: 'secondary.main', width: 48, height: 48 }}>
                                        {item.icon}
                                    </Avatar>
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                            {item.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Box sx={{ display: { xs: 'block', sm: 'none' }, textAlign: 'center' }}>
                        <Typography variant="h3" sx={{ fontWeight: 800 }}>V Call</Typography>
                    </Box>
                </Grid>

                {/* Right Side: Auth Form */}
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '100%'
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h4" sx={{ fontWeight: 700, mt: 1 }}>
                            {formState === 0 ? "Welcome Back" : "Join V Call"}
                        </Typography>

                        <Box sx={{ mt: 3, mb: 2 }}>
                            <Button
                                variant={formState === 0 ? "contained" : "text"}
                                onClick={() => setFormState(0)}
                                sx={{ borderRadius: 20, px: 3, mr: 1 }}
                            >
                                Sign In
                            </Button>
                            <Button
                                variant={formState === 1 ? "contained" : "text"}
                                onClick={() => setFormState(1)}
                                sx={{ borderRadius: 20, px: 3 }}
                            >
                                Sign Up
                            </Button>
                        </Box>

                        <Box component="form" noValidate sx={{ mt: 1, width: '100%', maxWidth: 400 }}>
                            {formState === 1 && (
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="fullname"
                                    label="Full Name"
                                    name="fullname"
                                    value={name}
                                    autoFocus
                                    onChange={(e) => setName(e.target.value)}
                                    variant="outlined"
                                />
                            )}

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                variant="outlined"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                value={password}
                                type="password"
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                variant="outlined"
                            />

                            {error && <Typography color="error" variant="body2" sx={{ mt: 2, textAlign: 'center' }}>{error}</Typography>}

                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 4, mb: 2, py: 1.5, borderRadius: 2, fontWeight: 700, fontSize: '1rem' }}
                                onClick={handleAuth}
                            >
                                {formState === 0 ? "Login" : "Create Account"}
                            </Button>

                            <Grid container justifyContent="center" sx={{ mt: 2 }}>
                                <Grid item>
                                    <Link
                                        component="button"
                                        type="button"
                                        variant="body2"
                                        onClick={() => setFormState(formState === 0 ? 1 : 0)}
                                        sx={{ textDecoration: 'none' }}
                                    >
                                        {formState === 0 ? "New here? Create an account" : "Have an account? Sign in"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={() => setOpen(false)}
                message={message}
            />
        </ThemeProvider>
    );
}