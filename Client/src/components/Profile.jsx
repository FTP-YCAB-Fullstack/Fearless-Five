import React, {useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Modal from 'react-modal';

import ModalInput from './ModalInput'
import CardJob from './CardJob'
import CardList from './CardList'

const Profile = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // const [modal, setModal] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [lamaran, setLamaran] = useState([]);
  const [job, setJob] = useState([]);

  const token = localStorage.getItem("token");

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
    const data = await axios.get(`http://localhost:3001/applies?${fields}=${id}`, {
      headers: {
        token
      }
    });
    setLamaran(data.data.apply)
  }

  const getJob = async (email) => {
    try {
      const data = await axios.get(`http://localhost:3001/vacancies?hrdEmail=${email}`, {
        headers: {
          token
        }
      });
      setJob(data.data)
      // setJob(data)
    } catch (err) {
    }
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
      getJob(user.email);
    }
  }, [user])

  return (
    <React.Fragment>
      {!user.name ? null : (
        <div>
        <div className="mt-12 ml-16 mb-8 flex flex-row">
              <div>
                <img className="rounded-full" src={user.profile} width="160" alt="noProfile"/>
              </div>

              <div className="ml-6">
                <div className="flex flex-row">
                  <div className="text-2xl font-bold">
                    <h1>{user.name}</h1>
                  </div>

                  <div className="ml-6">
                    <button className="font-light text-blue-500 text-xl" onClick={() => setModalIsOpen(true)}>Edit profile</button>
                  </div>
                </div>
                
                <div className="border border-gray-500 rounded w-96 h-3/5 p-1 mt-8">
                  <p>{user.summary}</p>
                </div>
              </div>
        </div>

        <div className="ml-16">
          <div>
            <h1 className="text-xl font-extrabold">Email</h1>
            <p className="font-semibold">{user.email}</p>
            <div className="border-b-2 border-gray-400 mt-2 w-11/12"></div>
          </div>

          <div className="mt-4">
            <h1 className="text-xl font-extrabold">Phone number</h1> 
            <p className="font-semibold">{user.phoneNumber}</p>
            <div className="border-b-2 border-gray-400 mt-2 w-11/12"></div>
          </div>

          <div className="mt-4">
            <h1 className="text-xl font-extrabold">Location</h1>
            <p className="font-semibold">{user.location}</p>
            <div className="border-b-2 border-gray-400 mt-2 w-11/12"></div>
          </div>

          <div className="mt-4">
            <h1 className="text-xl font-extrabold">Job</h1>
            <p className="font-semibold">{user.jobTitle}</p>
            <div className="border-b-2 border-gray-400 mt-2 w-11/12"></div>
          </div>

          <div className="mt-4">
            <h1 className="text-xl font-extrabold">Status</h1>
            <p className="font-semibold">{user.jobStatus}</p>
            <div className="border-b-2 border-gray-400 mt-2 w-11/12"></div>
          </div>

          <div className="mt-4">
            <h1 className="text-xl font-extrabold">Worknow</h1>
            <p className="font-semibold">{user.workNow}</p>
            <div className="border-b-2 border-gray-400 mt-2 w-11/12"></div>
          </div>
        </div>

        <p>{user.nationality}</p>
        <p>{user.citizen}</p>

        <div className="flex justify-center items-center mt-4">
          {user.cv ? <a className="font-bold bg-blue-500 text-white h-auto w-max p-2 rounded-lg" href={user.cv}>Check CV</a> : null}
        </div>
      </div>
      )}
      {
        modalIsOpen ?
          <Modal style={{overlay: {}, content: {borderRadius: '10px', padding: '0px', border: '2px solid #EDEDED', left: '15%', right: '15%'}}} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} closeTimeoutMS={2000} preventScroll={false}>
            <ModalInput/>
          </Modal>
          :
        null
      }
      {lamaran.map((el, i) => <CardJob getLamaran={getLamaran} email={user.email} key={i} userRole={user.role} {...el}/>)}
      {job.map((el, i) => <CardList key={i} {...el}/>)}
    </React.Fragment>
  );
};

export default Profile;