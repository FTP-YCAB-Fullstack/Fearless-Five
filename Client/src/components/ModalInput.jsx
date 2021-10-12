import axios from 'axios';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {storage} from './../firebase/index'

const ModalInput = props => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user);

    const [profile, setProfile] = useState({...user});
    const [profilePic, setProfilePic] = useState(null);

    const profilePicHandler = e => {
        if (e.target.files[0]) {
            setProfilePic(e.target.files[0])
        }
    }

    const changeHandler = e => {
        const {name, value} = e.target;
        setProfile(state => {
            return {
                ...state,
                [name]: value
            }
        });
    }

    const submitHandler = async e => {
        e.preventDefault();

        if (!profilePic) {
            const forServer = {
                ...profile
            }
            const token = localStorage.getItem('token')
            const response = await axios.patch('http://localhost:3001/users', forServer, {
                headers: {
                    token
                }
            });
            dispatch({type: 'ADD_LOGIN', payload: response.data})
        } else {
            const uploadTask = storage.ref(`images/${profilePic.name}`).put(profilePic);
            uploadTask.on('state_changed', snapshot => {}, err => console.log(err), async () => {
                const data = await storage.ref('images').child(profilePic.name).getDownloadURL();
                const forServer = {
                    ...profile,
                    profile: data
                }
                const token = localStorage.getItem('token')
                const response = await axios.patch('http://localhost:3001/users', forServer, {
                    headers: {
                        token
                    }
                });
                dispatch({type: 'ADD_LOGIN', payload: response.data})
            })
        }
    }

    return (
        <div className="flex flex-col w-96 ">
            <form onSubmit={submitHandler}>
                <input onChange={profilePicHandler} accept=".jpg .jpeg .png" className="w-full p-2 border-2 rounded-lg border-gray-100" type="file" autoComplete="off" placeholder="User Profile" />
                <input className="w-full p-2 border-2 rounded-lg border-gray-100" onChange={changeHandler} value={profile.name} name="name" type="text" autoComplete="off" placeholder="Name"/>
                <input className="w-full p-2 border-2 rounded-lg border-gray-100" onChange={changeHandler} value={profile.phoneNumber} name="phoneNumber" type="text" autoComplete="off" placeholder="Phone"/>
                <input className="w-full p-2 border-2 rounded-lg border-gray-100" onChange={changeHandler} value={profile.jobTitle} name="jobTitle" type="text" autoComplete="off" placeholder="Job Title"/>
                <input className="w-full p-2 border-2 rounded-lg border-gray-100" onChange={changeHandler} value={profile.email} name="email" type="email" autoComplete="off" placeholder="Email"/>
                <input className="w-full p-2 border-2 rounded-lg border-gray-100" onChange={changeHandler} value={profile.location} name="location" type="text" autoComplete="off" placeholder="Location"/>
                <input className="w-full p-2 border-2 rounded-lg border-gray-100" onChange={changeHandler} value={profile.workNow} name="workNow" type="text" autoComplete="off" placeholder="Company"/>
                <input className="w-full p-2 border-2 rounded-lg border-gray-100" onChange={changeHandler} value={profile.jobStatus} name="jobStatus" type="text" autoComplete="off" placeholder="Job Status"/>
                <textarea className="w-full p-2 border-2 rounded-lg border-gray-100" onChange={changeHandler} value={profile.summary} name="summary" type="text" autoComplete="off" placeholder="Job Status"/>
                <button className="block p-2 bg-blue-300 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default ModalInput;