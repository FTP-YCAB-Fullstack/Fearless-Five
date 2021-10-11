import React from 'react';
import {useSelector} from 'react-redux'
import {Redirect, Route} from 'react-router-dom';

const HRoutes = (props) => {
    const status = useSelector(state => state.user.role)
    return (
        status === 'hrd' ?  <Route {...props} exact /> : <Redirect to="/" /> 
    )
}

export default HRoutes;