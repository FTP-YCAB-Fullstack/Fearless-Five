import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useHistory } from 'react-router';

import ChatPage from './../page/ChatPage'

const CardJob = props => {
    const token = localStorage.getItem('token');
    const history = useHistory();

    const buttonHandler = action => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
              if (action === 'reject') {
                axios.patch(`http://localhost:3001/applies/${props._id}`, {status: 'Rejected'}, {
                    headers: {
                        token
                    }
                })
              } else {
                axios.patch(`http://localhost:3001/applies/${props._id}`, {status: 'Accepted'}, {
                    headers: {
                        token
                    }
                })
              }
            }
            Swal.fire('Action Success', '', 'success')
            props.getLamaran('email', props.email);
          });
    }

    const deleteApply = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(res => {
            if (res.isConfirmed) {
                axios.delete(`http://localhost:3001/applies/${props._id}`, {
                    headers: {
                        token
                    }
                }).then(res => {
                    Swal.fire('Saved!', '', 'success')
                    props.getLamaran('email', props.email);
                })
            }
        });
    }

    const goToChat = () => {
        const state = {
            room: `${props.vacancyId._id}${props.idPelamar._id}`
        }
        history.push('/profile/chat', state)
    }

    return (
        <div className="w-96 h-64 border-2 border-red-200">
            <h1>{props.companyName}</h1>
            {props.userRole === 'hrd' ? <a href={props.idPelamar.cv}>{props.idPelamar.name}</a> : null}
            <h1>{props.vacancyId.role}</h1>
            <h1 className="bg-yellow-500 text-white">{props.status}</h1>
            {props.userRole === 'hrd' && props.status === 'Pending' ? <button onClick={() => buttonHandler('accept')} className="p-2 bg-red-200 mx-3">Approve</button> : null}
            {props.userRole === 'hrd' && props.status === 'Pending' ? <button onClick={() => buttonHandler('reject')} className="p-2 bg-red-200 mx-3">Reject</button> : null}
            {props.status === 'Rejected' || props.status === 'Accepted' ? <button onClick={() => deleteApply()} className="p-2 bg-red-200 mx-3">Delete</button> : null}
            {props.status === 'Accepted' && <button onClick={goToChat}>Chat</button>}
        </div>
    )
} 

export default CardJob