import React from 'react';
import styled from 'styled-components';
import { Link, Redirect, useHistory } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'


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
            <nav className="flex flex-row w-auto sticky top-0 font-semibold px-4 py-1.5 h-12 text-gray-500 bg-white">
                <Link className="px-6" to="/">Home</Link>
                {status === 'hrd' ? <Link className="px-6" to="/postjob">Post Job</Link> : null}
                {auth ? <Link className="px-6" to="/jobs">List Job</Link> : null}
                {!auth ? <Link className="px-6" to="/register">Register</Link> : null}
                {!auth ? <Link className="px-6" to="/login">Login</Link> : <Link to="/profile">Profile</Link>}
                <Link className="px-6" to="/about">about</Link>
                {auth ? <LogOut onClick={clickEvent}>Logout</LogOut> : <Redirect to="/"/>}
            </nav>
        </>
    )
}

export default Navbar