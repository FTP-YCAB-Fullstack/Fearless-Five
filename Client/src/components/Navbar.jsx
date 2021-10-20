import React from "react";
import styled from "styled-components";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./../css/style.css";

const Nav = styled.nav`
  padding: 1rem;
`;

const Info = styled.div`
  width: 100%;
`;

const LogOut = styled.p`
  cursor: pointer;
`;

const Navbar = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.isAuthenticated);
  const status = useSelector((state) => state.user.role);

  const clickEvent = () => {
    localStorage.removeItem("token");
    history.push("/");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <Nav className="bg-gray-100 flex justify-between">
        <Link className="px-2" to="/">
          Home
        </Link>
        <div className="sm:hidden">
          <ul className="nav-item dropdown mr-2">
            <a
              className="nav-link dropdown-toggle list"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu min-w-full" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                {status === "hrd" ? (
                  <Link className="px-2" to="/postjob">
                    Post Job
                  </Link>
                ) : null}
              </a>
              <a className="dropdown-item" href="#">
                {auth ? (
                  <Link className="px-2" to="/jobs">
                    List Job
                  </Link>
                ) : null}
              </a>
              <a className="dropdown-item" href="#">
                {!auth ? (
                  <Link className="px-2" to="/register">
                    Register
                  </Link>
                ) : null}
              </a>
              <a className="dropdown-item" href="#">
                {!auth ? (
                  <Link className="px-2" to="/login">
                    Login
                  </Link>
                ) : (
                  <Link className="px-2" to="/profile">
                    Profile
                  </Link>
                )}
              </a>
              <a className="dropdown-item" href="#">
                <Link className="px-2" to="/about">
                  about
                </Link>
              </a>
              <a className="dropdown-item" href="#">
                {auth ? (
                  <LogOut className="px-2" onClick={clickEvent}>
                    Logout
                  </LogOut>
                ) : (
                  <Redirect to="/" />
                )}
              </a>
            </div>
          </ul>
        </div>
        <Info className="hidden sm:flex sm:justify-end">
          {status === "hrd" ? (
            <Link className="px-2" to="/postjob">
              Post Job
            </Link>
          ) : null}
          {auth ? (
            <Link className="px-2" to="/jobs">
              List Job
            </Link>
          ) : null}
          {!auth ? (
            <Link className="px-2" to="/register">
              Register
            </Link>
          ) : null}
          {!auth ? (
            <Link className="px-2" to="/login">
              Login
            </Link>
          ) : (
            <Link className="px-2" to="/profile">
              Profile
            </Link>
          )}
          <Link className="px-2" to="/about">
            about
          </Link>
          {auth ? (
            <LogOut className="px-2" onClick={clickEvent}>
              Logout
            </LogOut>
          ) : (
            <Redirect to="/" />
          )}
        </Info>
      </Nav>
    </>
  );
};

export default Navbar;
