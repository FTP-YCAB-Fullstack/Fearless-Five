import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import axios from 'axios'

const DetailJobPage = props => {

    const [cv, setCv] = useState(null)

    const state = useSelector(state => state.user)
    const history = useHistory();
    let data = history.location.state

    const apply = async () => {
        const forServer = {
            companyName: data.companyName,
            vacancyId: data._id,
            idPelamar: state._id,
            emailHrd: data.hrdEmail,
            cv: 'https://www.cakeresume.com/cdn-cgi/image/fit=scale-down,format=auto,w=600/https://images.cakeresume.com/images/2c3003d8-3041-4ab6-85bc-2947d5fe84e0.png'
        }
        const token = localStorage.getItem('token')
        const result = await axios.post('http://localhost:3001/applies', forServer, {
            headers: {
                token
            }
        });
    }

    return (
        <div>
            <p>{data.companyName}</p>
            <p>{data.rangeSalary}</p>
            <p>{data.hrdEmail}</p>
            <p>Benefit</p>
            <ul>
                {data.benefit.map(el => <li>{el}</li>)}
            </ul>
            <h1 className="text-lg font-bold">Requirement</h1>
            <ul>
                {data.requirements.map(el => <li>{el}</li>)}
            </ul>
            <h1 className="text-lg font-bold">Responsibility</h1>
            <ul>
                {data.responsibility.map(el => <li>{el}</li>)}
            </ul>
            <h1 className="text-lg font-bold">Mandatory Skills</h1>
            <ul>
                {data.mandatorySkills.map(el => <li>{el}</li>)}
            </ul>
            <h1 className="text-lg font-bold">Good To Have Skills</h1>
            <ul>
                {data.goodToHave.map(el => <li>{el}</li>)}
            </ul> 
            <button disabled={state.email === data.hrdEmail ? true : false} className="bg-red-300" onClick={apply}>{state.email === data.hrdEmail ? 'You are same person' : 'Apply'}</button>
        </div>
    )

}

export default DetailJobPage