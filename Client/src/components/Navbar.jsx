import React from 'react';
import styled from 'styled-components';
import { Link, Redirect, useHistory } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'

const Nav = styled.nav`
    display: flex;
    padding: 1rem;
    flex-direction: row;
    justify-content: start;
`

const Info = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`

const LogOut = styled.p`
    cursor: pointer
`

const Navbar = props => {
    const history = useHistory()
    const dispatch = useDispatch()
    const auth = useSelector(state => state.isAuthenticated);
    const status = useSelector(state => state.user.role);

    const clickEvent = () => {
        localStorage.removeItem('token');
        history.push('/')
        dispatch({type: 'LOGOUT'});
    }

    return (
        <>
            <Nav className="bg-gray-100">
                <Link className="px-2" to="/">Home</Link>
                <Info>
                    {status === 'hrd' ? <Link className="px-2" to="/postjob">Post Job</Link> : null}
                    {auth ? <Link className="px-2" to="/jobs">List Job</Link> : null}
                    {!auth ? <Link className="px-2" to="/register">Register</Link> : null}
                    {!auth ? <Link className="px-2" to="/login">Login</Link> : <Link className="px-2" to="/profile">Profile</Link>}
                    <Link className="px-2" to="/about">about</Link>
                    {auth ? <Link className="px-2" onClick={clickEvent}>Logout</Link> : <Redirect to="/"/>}
                </Info>
            </Nav>
        </>
    )
}

export default Navbar