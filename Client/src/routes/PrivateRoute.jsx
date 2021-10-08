import React from 'react';
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component, path}) => {
    const auth = localStorage.getItem('auth');
    return (
        !auth ? <Redirect to='/login' /> : <Route component={component} path={path} />
    )
}

export default PrivateRoute