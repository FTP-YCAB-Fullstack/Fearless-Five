import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'

const NavG = styled.nav`
    display: flex;
    justify-content: space-around
`

const Navbar = props => {
    const auth = useSelector(state => state.isAuthenticated);
    return (
        <NavG>
            <Link to="/">Home</Link>
            {!auth ? <Link to="/register">Register</Link> : null}
            {!auth ? <Link to="/login">Login</Link> : <Link to="/profile">Profile</Link>}
        </NavG>
    )
}

export default Navbar