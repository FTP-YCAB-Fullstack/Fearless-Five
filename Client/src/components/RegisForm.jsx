import React,{useState} from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'

const Regis = () =>{
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")


    const postRegis = async data => {
        let response = await axios.post('http://localhost:3001/register', data);
        response = response.data;
      }

    const handleSumbit = (e) =>{
        e.preventDefault();
        let Register = {
            name,
            email,
            password
        }

        setName("")
        setEmail("")
        setPassword("")
        postRegis(Register)
    }

    return (
        <div>
            <div>
                <h1>Register</h1>
            </div>
            <div>
                <form onSubmit={handleSumbit}>
                  <input type="text"  placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} />
                  <input type="text"  placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                  <input type="password"  placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                  <button>Sumbit</button>
                  <p>Sudah mempunyai akun? <Link to="/login" > Login </Link> </p>
                </form>
            </div>
        </div>
    )
}

export default Regis