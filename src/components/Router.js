import React from 'react'
import { Route } from 'react-router-dom'
import Authentication from './Authentication'
import Login from './Login'
import Register from './Register'


const Router = () => {

    return (
        <div>
            <Route path="/" component={Register} exact={true} />
            <Route path="/login" component={Login} exact={true} />
            <Route path="/register" component={Register} exact={true} />
            <Route path='login' component={Login} exact={true} />
        </div>
    )

}

export default Router