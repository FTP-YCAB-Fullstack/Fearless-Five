import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import './../css/style.css'

const Regis = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const postRegis = async (data) => {
    try {
      let response = await axios.post(
        "http://localhost:3001/users/register",
        data
      );
      response = response;
      swal.fire({
        icon: "success",
        title: "Sign Up Success!",
        text: "Your account is successfully registered",
      });
      let login = await axios.post("http://localhost:3001/users/login", {
        email,
        password,
      });
      login = login.data.token;
      localStorage.setItem("token", login);
      let profile = await axios.get("http://localhost:3001/users", {
        headers: {
          token: login,
        },
      });
      profile = profile.data;
      dispatch({ type: "ADD_LOGIN", payload: profile });
      history.push("/profile", { state: "eo" });
    } catch (err) {
      console.log(err);
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This email is already registered",
      });
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    let Register = {
      name,
      email,
      password,
      role: role,
    };

    postRegis(Register);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-full pt-10 w-screen flex justify-center items-center">
      <div className=" card sm:bg-gray-50 h-auto py-3 pl-2 sm:filter sm:drop-shadow-lg">
        <div>
          <span className="text-4xl flex justify-center h-20">logo</span>
        </div>
        <div>
          <h1 className="pl-10 sm:pl-12 lg:pl-52 text-lg font-bold h-20">Register</h1>
        </div>
        <div className="flex flex-col items-center">
          <form
            className="flex flex-col h-80 w-60 sm:w-96 justify-between"
            onSubmit={handleSumbit}
          >
            <span className="h-4">name</span>
            <input
              className="outline-none border-2 border-gray-400 h-8 rounded-md pl-2 "
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span className="h-4">email</span>
            <input
              className="outline-none border-2 border-gray-400 h-8 rounded-md pl-2 "
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="h-4">password</span>
            <input
              className="outline-none border-2 border-gray-400 h-8 rounded-md pl-2 "
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="flex flex-row justify-between">
              <div className="w-32 flex justify-evenly items-center">
                <input
                  id="1"
                  name="buttom"
                  type="radio"
                  onChange={(e) => setRole(e.target.value)}
                  value="user"
                  required
                />
                <span className="text-base font-bold ">Job Hunter</span>
              </div>
              <div className="w-32 flex justify-evenly items-center">
                <input
                  id="2"
                  name="buttom"
                  type="radio"
                  onChange={(e) => setRole(e.target.value)}
                  value="hrd"
                />
                <span className="text-base font-bold ">Job Poster</span>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-blue-500 text-white h-10 rounded-md w-32">
              Create account
              </button>
            </div>
            <div>
              <p className="italic text-center">
                Sudah mempunyai akun?
                <Link to="/login" className="font-bold">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Regis;
