import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import axios from 'axios'

const DetailJobPage = props => {

    const [yourData, setYourData] = useState([]);
    let [canApply, setCanApply] = useState(true)

    const state = useSelector(state => state.user)
    const history = useHistory();
    let data = history.location.state

    const apply = async () => {
        const forServer = {
            companyName: data.companyName,
            vacancyId: data._id,
            idPelamar: state._id,
            emailHrd: data.hrdEmail,
        }
        const token = localStorage.getItem('token')
        const result = await axios.post('http://localhost:3001/applies', forServer, {
            headers: {
                token
            }
        });
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get('http://localhost:3001/applies?id='+ state._id, {
            headers: {
                token
            }
        })
        .then(res => setYourData(res.data.apply));
    }, [])

    useEffect(() => {
        let exist = yourData.find(el => el.vacancyId._id === data._id);
        if (exist) {
            setCanApply(false)
        }
    }, [yourData])

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
            <button disabled={state.role === 'hrd' || canApply === false ? true : false} className="bg-red-300" onClick={apply}>{state.role === 'hrd' || canApply === false ? 'Cannot Apply' : 'Apply'}</button>
        </div>
    )

}

export default DetailJobPage