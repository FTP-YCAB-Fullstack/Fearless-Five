import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert2";

const Regis = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const postRegis = async (data) => {
    try {
      let response = await axios.post("http://localhost:3001/register", data);
      response = response;
      swal.fire({
        icon: "success",
        title: "Sign Up Success!",
        text: "Your account is successfully registered",
      });
    } catch (err) {
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
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-96">
        <div>
          <span className="text-4xl flex justify-center h-32">logo</span>
        </div>
        <div>
          <h1 className="text-lg font-bold h-20">Register</h1>
        </div>
        <div>
          <form
            className="flex flex-col h-80 justify-between"
            onSubmit={handleSumbit}
          >
            <span className="h-4">name</span>
            <input
              className="outline-none border-2 border-gray-400 h-8 rounded-md "
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span className="h-4">email</span>
            <input
              className="outline-none border-2 border-gray-400 h-8 rounded-md "
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="h-4">password</span>
            <input
              className="outline-none border-2 border-gray-400 h-8 rounded-md "
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
            <button className="bg-blue-500 text-white h-10 rounded-md">
              Create account
            </button>
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
