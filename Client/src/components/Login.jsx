import React, {useState} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const postLogin = async data => {
    try {
      let response = await axios.post('http://localhost:3001/login', data);
      response = response.data;
      localStorage.setItem('token', response.token)
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Login Success',
      })
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Either email or password wrong',
      })
    }
  }

  const submitHandler = (e) =>{
    e.preventDefault();
    let email_password = {
        email,
        password
    }

    setEmail("")
    setPassword("")
    console.log(email_password)
    postLogin(email_password)
  }

  return (
    <div>
      <h1>
        Login
      </h1>
     <div>
      <form onSubmit={submitHandler}>
        <input placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} type="text"/>
        <input placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} type="text"/>
        <button>Submit</button>
        <p>belum mempunyai akun? <Link to="/register" > Register </Link> </p>
      </form>
     </div>
    </div>
  );
}

export default Login