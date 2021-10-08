import React from 'react';
import {Route, Redirect} from 'react-router-dom'

const PublicRoute = ({component, path}) => {
    const auth = localStorage.getItem('token');
    return (
        auth ? <Redirect to='/' /> : <Route component={component} path={path} />
    )
}

export default PublicRoute