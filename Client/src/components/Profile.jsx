import React, {useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom'

import ModalInput from './ModalInput'

const Profile = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [modal, setModal] = useState(false);

  const [lamaran, setLamaran] = useState([])


  const getProfile = async (token) => {
    try {
      const data = await axios.get("http://localhost:3001/users", {
        headers: {
          token,
        },
      });
      dispatch({ type: "ADD_LOGIN", payload: data.data });
    } catch (err) {
    }
  };

  const getLamaran = async (fields,id) => {
    const token = localStorage.getItem("token");
    const data = await axios.get(`http://localhost:3001/applies?${fields}=${id}`, {
      headers: {
        token
      }
    });
    setLamaran(data.data.apply)
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    getProfile(token);
  }, []);

  useEffect(() => {
    if (user.role === 'user') {
      getLamaran('id',user._id)
    } else {
      getLamaran('email', user.email)
    }
  }, [user])

  return (
    <React.Fragment>
      {!user.name ? null : (
        <div>
          <img src={user.profile} width="80" alt="noProfile"/>
          <h1>{user.name}</h1>
          <p>{user.jobTitle}</p>
          <p>{user.phoneNumber}</p>
          <p>{user.nationality}</p>
          <p>{user.jobStatus}</p>
          <p>{user.citizen}</p>
          <p>{user.location}</p>
          <p>{user.summary}</p>
          <p>{user.email}</p>
          <p>{user.workNow}</p>
        </div>
      )}
      <button onClick={() => setModal(true)}>Edit</button>
      {
        modal ? 
        <div>
          <h1 className="text-lg font-bold">Form Edit</h1>
          <ModalInput />
        </div> :
        null
      }
      {lamaran.map((el, i) => <p key={i}>{el.companyName} ({el.vacancyId.role}) : {el.status.toUpperCase()}</p>)}
    </React.Fragment>
  );
};

export default Profile;
