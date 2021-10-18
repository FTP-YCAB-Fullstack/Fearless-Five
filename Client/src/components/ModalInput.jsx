import axios from 'axios';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {storage} from './../firebase/index'
import Swal from './../utils/Swal'


const ModalInput = props => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user);

    const [profile, setProfile] = useState({...user});
    const [profilePic, setProfilePic] = useState(null);
    const [cvUser,setCvUser] = useState(null);

    const profilePicHandler = e => {
        if (e.target.files[0]) {
            setProfilePic(e.target.files[0])
        }
    }
    const cvHandler = e =>{
        if (e.target.files[0]){
            setCvUser(e.target.files[0])
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
            dispatch({type: 'ADD_LOGIN', payload: response.data});
            await Swal('success', 'Success Updating your profile')
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
                await Swal('success', 'Success Updating your profile')
            })
        }
    }

   const sumbitCv = async (e) => {
     e.preventDefault()
     const uploadCv = storage.ref(`cv-user/${cvUser.name}`).put(cvUser)
     uploadCv.on(
         "state_changed",
          snapshot=> {},
          error => {
             console.log(error)
         },
         () =>{
             storage.ref("cv-user").child(cvUser.name).getDownloadURL().then(url=>{
                 const forServer = {
                     ...user,
                     cv:url
                 }
                 const token = localStorage.getItem('token')
                 axios.patch("http://localhost:3001/users",forServer,{
                     headers: {
                         token
                     }
                 }).then(result=>{
                     dispatch({type:"ADD_LOGIN",payload:result.data})
                     Swal('success', 'Success Updating your profile')
                 })
             }).catch(error =>{
                 Swal('error', 'Oops something went wrong')
             })
         }
     )
   }
  

    return (
        <div>
            <div className="flex flex-col w-full justify-center items-center">
                <div className="h-14 w-full bg-blue-500 flex justify-center items-center font-bold text-xl text-white rounded-lg top-0">
                    <p>Edit your profile</p>
                </div>
                <form className="w-3/6" onSubmit={submitHandler}>
                    <p className="mt-4 text-lg font-bold">Select Profile Picture</p>
                    <input onChange={profilePicHandler} accept=".jpg .jpeg .png" className="mt-0.5 w-full p-2 border-2 rounded-lg border-gray-300" type="file" autoComplete="off" placeholder="User Profile" />

                    <p className="mt-2 text-lg font-bold">Name</p>
                    <input className="mt-0.5 w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" onChange={changeHandler} value={profile.name} name="name" type="text" autoComplete="off" placeholder="Name"/>

                    <p className="text-lg font-bold mt-2">Phone Number</p>
                    <input className="mt-0.5 w-full p-2 border-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" onChange={changeHandler} value={profile.phoneNumber} name="phoneNumber" type="text" autoComplete="off" placeholder="Phone"/>

                    <p className="text-lg font-bold mt-2">Job</p>
                    <input className="mt-0.5 w-full p-2 border-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" onChange={changeHandler} value={profile.jobTitle} name="jobTitle" type="text" autoComplete="off" placeholder="Job Title"/>

                    <p className="text-lg font-bold mt-2">Email</p>
                    <input className="mt-0.5 w-full p-2 border-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" onChange={changeHandler} value={profile.email} name="email" type="email" autoComplete="off" placeholder="Email"/>

                    <p className="text-lg font-bold mt-2">Location</p>
                    <input className="mt-0.5 w-full p-2 border-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" onChange={changeHandler} value={profile.location} name="location" type="text" autoComplete="off" placeholder="Location"/>

                    <p className="text-lg font-bold mt-2">Work Now</p>
                    <input className="mt-0.5 w-full p-2 border-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" onChange={changeHandler} value={profile.workNow} name="workNow" type="text" autoComplete="off" minLength="5" maxLength="14" placeholder="Company"/>

                    <p className="text-lg font-bold mt-2">Job Status</p>
                    <input className="mt-0.5 w-full p-2 border-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" onChange={changeHandler} value={profile.jobStatus} name="jobStatus" type="text" autoComplete="off" placeholder="Job Status"/>

                    <p className="text-lg font-bold mt-2">Summary</p>
                    <textarea className="mt-0.5 w-full p-2 border-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" onChange={changeHandler} value={profile.summary} name="summary" type="text" autoComplete="off" placeholder="Job Status"/>

                    <button className="font-bold mt-2.5 block px-3 py-2 bg-blue-500 rounded-lg text-white">Update profile</button>
                </form>
                <form className="w-3/6" onSubmit={sumbitCv}>
                    <p className="mt-2 text-lg font-bold">Select your CV</p>
                    <input className="mt-0.5 w-full p-2 border-2 rounded-lg border-gray-300" type="file" onChange={cvHandler}/>
                    <button className="mt-2.5 mb-4 block px-3 py-2 text-white font-bold bg-blue-500 rounded-lg">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ModalInput;