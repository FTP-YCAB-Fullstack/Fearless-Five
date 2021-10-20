import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import './../css/style.css'


const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postLogin = async (data) => {
    try {
      let response = await axios.post(
        "http://localhost:3001/users/login",
        data
      );
      response = response.data;
      localStorage.setItem("token", response.token);
      const token = localStorage.getItem("token");
      let userProfile = await axios.get("http://localhost:3001/users", {
        headers: {
          token,
        },
      });
      userProfile = userProfile.data;
      dispatch({ type: "ADD_LOGIN", payload: userProfile });
      history.push("/profile", { test: "eo" });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Either email or password wrong",
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let email_password = {
      email,
      password,
    };

    setEmail("");
    setPassword("");
    postLogin(email_password);
  };

  return (
    <div className=" h-full pt-10 w-screen flex justify-center items-center">
      <div className="card sm:bg-gray-50 h-auto py-3 pl-2 sm:filter sm:drop-shadow-lg">
        <div>
          <span className="text-4xl flex justify-center h-20">logo</span>
        </div>
        <div>
          <h1 className=" pl-10 sm:12 lg:pl-52 text-lg font-bold h-20">Login</h1>
        </div>
        <div className="flex flex-col items-center">
          <form
            className="flex flex-col h-80 w-60 sm:w-96 justify-between"
            onSubmit={submitHandler}
          >
            <span className="h-0">email</span>
            <input
              className="outline-none border-2 border-gray-400 h-8 rounded-md pl-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent "
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="h-0">password</span>
            <input
              className="outline-none border-2 border-gray-400 h-8 rounded-md pl-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent "
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="flex items-center flex-col">
              <button className="bg-blue-500 text-white h-10 focus:outline-none rounded-md w-28">
                Login
              </button>
            </div>
            <div>
              <p className="italic text-center">
                belum mempunyai akun?
                <Link to="/register" className="font-bold">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
