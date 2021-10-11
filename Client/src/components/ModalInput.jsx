import React, {useState} from 'react';
import {useSelector} from 'react-redux';

const ModalInput = props => {
    const user = useSelector(state => state.user);

    const [profile, setProfile] = useState({...user});
    
    const changeHandler = e => {
        const {name, value} = e.target;
        setProfile(state => {
            return {
                ...state,
                [name]: value
            }
        });
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log(profile)
    }

    return (
        <div className="flex flex-col w-96 ">
            <form onSubmit={submitHandler}>
                <input className="p-2 border-2 rounded-lg border-gray-100" type="file" autoComplete="off" placeholder="CV" />
                <input className="p-2 border-2 rounded-lg border-gray-100" type="file" autoComplete="off" placeholder="User Profile" />
                <input className="p-2 border-2 rounded-lg border-gray-100" onChange={changeHandler} value={profile.name} name="name" type="text" autoComplete="off" placeholder="Name"/>
                <input className="p-2 border-2 rounded-lg border-gray-100" onChange={changeHandler} value={profile.phoneNumber} name="phoneNumber" type="text" autoComplete="off" placeholder="Phone"/>
                <input className="p-2 border-2 rounded-lg border-gray-100" onChange={changeHandler} value={profile.jobTitle} name="jobTitle" type="text" autoComplete="off" placeholder="Job Title"/>
                <input className="p-2 border-2 rounded-lg border-gray-100" onChange={changeHandler} value={profile.email} name="email" type="email" autoComplete="off" placeholder="Email"/>
                <input className="p-2 border-2 rounded-lg border-gray-100" onChange={changeHandler} value={profile.location} name="location" type="text" autoComplete="off" placeholder="Location"/>
                <input className="p-2 border-2 rounded-lg border-gray-100" onChange={changeHandler} value={profile.workNow} name="workNow" type="text" autoComplete="off" placeholder="Company"/>
                <input className="p-2 border-2 rounded-lg border-gray-100" onChange={changeHandler} value={profile.jobStatus} name="jobStatus" type="text" autoComplete="off" placeholder="Job Status"/>
                <textarea className="p-2 border-2 rounded-lg border-gray-100" onChange={changeHandler} value={profile.summary} name="summary" type="text" autoComplete="off" placeholder="Job Status"/>
                <button className="block p-2 bg-blue-300 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default ModalInput;