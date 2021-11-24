import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'


const App = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

    const handleAuth = () => {
        setIsUserLoggedIn(!isUserLoggedIn)
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            handleAuth()

        }

    }, [])

    return (
        <div>
            <NavBar isUserLoggedIn={isUserLoggedIn} handleAuth={handleAuth} />
        </div>
    )

}

export default App