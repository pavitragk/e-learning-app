import React from 'react'
import { Link } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { color } from '@mui/system';





const LinkRoute = (props) => {
    const { handleAuth, isUserLoggedIn } = props

    const user = useSelector((state) => {
        return state.users.user
    })
    return (
        <div>
            <AppBar elevation={0} >
                <Toolbar >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        E-learning
                    </Typography>
                    {isUserLoggedIn
                        ? (<div>
                            <Button color="primary">
                                <Link onClick={() => {
                                    localStorage.clear()
                                    alert("successfully logged out")
                                    handleAuth()
                                }} to="/">Logout</Link>
                            </Button>


                            {user?.role === 'student' ? (
                                <div>
                                    <Button color="inherit">
                                        {/* <Link to="/dashboard">Dashboard</Link> */}
                                    </Button>
                                    <Button>
                                        <Link to="/myCourses">MyCourses</Link>
                                    </Button>

                                </div>
                            ) :
                                <div>
                                    <Button >
                                        <Link to="/adminAccount">MyAccount</Link>
                                    </Button>
                                    <Button>
                                        <Link to="/dashboard">Dashboard</Link>
                                    </Button>
                                    <Button>
                                        <Link to="/students">Students</Link>
                                    </Button>
                                    <Button>
                                        <Link to='/courses'>MyCourses </Link>
                                    </Button>
                                </div>
                            }
                        </div>
                        )
                        : < div >
                            <Button >
                                <Link to="/">Admin</Link><br />
                            </Button>
                            <Button color="inherit">
                                <Link to="/studentLogin">Student</Link>
                            </Button>
                        </div>

                    }

                </Toolbar>
            </AppBar>

        </div >

    )

}

export default LinkRoute