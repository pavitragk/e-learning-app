import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { startUserRegister } from '../actions/usersAction'
import { useDispatch } from 'react-redux'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();


const Register = (props) => {

    const dispatch = useDispatch()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [name, setName] = useState("")
    const [website, setWebsite] = useState("")


    const handleChange = (e) => {

        if (e.target.name === "username") {
            setUsername(e.target.value)
        } else if (e.target.name === "email") {
            setEmail(e.target.value)
        } else if (e.target.name === "password") {
            setpassword(e.target.value)
        } else if (e.target.name === "name") {
            setName(e.target.value)
        } else if (e.target.name === "website") {
            setWebsite(e.target.value)
        }

    }

    const handleSubmit = (e) => {

        e.preventDefault()
        const formData = {
            username: username,
            email: email,
            password: password,
            academy: {
                name: name,
                website: website
            }
        }
        console.log(formData)
        dispatch(startUserRegister(formData, props))



    }

    // return (
    //     <div>
    //         <h2>Register here</h2>
    //         <form onSubmit={handleSubmit}>
    //             <input type="text" placeholder="username" name="username" value={username} onChange={handleChange} /><br />
    //             <input type="text" placeholder="email" name="email" value={email} onChange={handleChange} /><br />
    //             <input type="text" placeholder="password" name="password" value={password} onChange={handleChange} /><br />
    //             <input type="text" placeholder="name" name="name" value={name} onChange={handleChange} /> <br />
    //             <input type="text" placeholder="website" name="website" value={website} onChange={handleChange} /><br />
    //             <input type="submit" value="register" />

    //         </form>
    //         if already registered login here <Link to="/login">Admin login</Link>
    //     </div>
    // )
    return (

        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        {/* <Box onSubmit={handleSubmit} sx={{ mt: 1 }}> */}
                        <form onSubmit={handleSubmit}>

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Enter your name"
                                name="username"
                                autoComplete="email"
                                autoFocus
                                value={username}
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={handleChange}

                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Academy name"
                                name="name"
                                autoComplete="email"
                                autoFocus
                                value={name}
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Website name"
                                name="website"
                                autoComplete="email"
                                autoFocus
                                value={website}
                                onChange={handleChange}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign up
                            </Button>

                            <Grid container>

                                <Grid item>
                                    if already registered login here <Link to="/login">Admin login</Link>
                                </Grid>
                            </Grid>
                        </form>

                        {/* </Box> */}
                    </Box>
                </Grid>

            </Grid>
        </ThemeProvider>

    );

}

export default Register


