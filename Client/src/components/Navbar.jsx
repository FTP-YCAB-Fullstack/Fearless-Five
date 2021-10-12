import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'

const NavG = styled.nav`
    display: flex;
    justify-content: space-around
`

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
        <NavG>
            <Link to="/">Home</Link>
            {status === 'hrd' ? <Link to="/postjob">Post Job</Link> : null}
            <Link to="/jobs">List Job</Link>
            {!auth ? <Link to="/register">Register</Link> : null}
            {!auth ? <Link to="/login">Login</Link> : <Link to="/profile">Profile</Link>}
            {auth ? <LogOut onClick={clickEvent}>Logout</LogOut> : null}
        </NavG>
    )
}

export default Navbar