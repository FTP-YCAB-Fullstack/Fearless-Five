import React from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'


const LogOut = styled.p`
    cursor: pointer
`

const Navbar = props => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.isAuthenticated);
    const status = useSelector(state => state.user.role);

    const clickEvent = () => {
        localStorage.removeItem('token');
        dispatch({type: 'LOGOUT'})
    }

    return (
        <nav className="flex flex-row justify-around">
            <Link to="/">Home</Link>
            {status === 'hrd' ? <Link to="/postjob">Post Job</Link> : null}
            <Link to="/listjob">List Job</Link>
            {!auth ? <Link to="/register">Register</Link> : null}
            {!auth ? <Link to="/login">Login</Link> : <Link to="/profile">Profile</Link>}
            {auth ? <LogOut onClick={clickEvent}>Logout</LogOut> : <Redirect to="/"/>}
        </nav>
    )
}

export default Navbar