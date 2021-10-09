import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from 'sweetalert2'


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
        icon: 'success',
        title: 'Sign Up Success!',
        text: 'Your account is successfully registered',
      })
    } catch (err) {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'This email is already registered',
      })
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
    <div>
      <div>
        <h1>Register</h1>
      </div>
      <div>
        <form onSubmit={handleSumbit}>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div>
            <input
              id="1"
              name="buttom"
              type="radio"
              onChange={(e) => setRole(e.target.value)}
              value="user"
              required
            />
            <label htmlFor="user">Job Hunter</label>
            <input
              id="2"
              name="buttom"
              type="radio"
              onChange={(e) => setRole(e.target.value)}
              value="hrd"
            />
            <label htmlFor="hrd">Job Poster</label>
          </div>
          <button>Submit</button>
          <p>
            Sudah mempunyai akun? <Link to="/login"> Login </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Regis;
