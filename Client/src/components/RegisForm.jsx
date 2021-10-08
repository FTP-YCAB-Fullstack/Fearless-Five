import React,{useState} from "react"
import axios from 'axios'

const Regis = () =>{
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")


    const postRegis = async data => {
        let response = await axios.post('http://localhost:3001/register', data);
        response = response.data;
        localStorage.setItem('token', response.token)
        console.log(localStorage.getItem('token'))
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
                  <input type="password"  placeholder="password" value={password} onChange={(e)=>setEmail(e.target.value)} />
                </form>
            </div>
        </div>
    )
}

export default Regis