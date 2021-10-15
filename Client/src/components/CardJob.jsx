import React from 'react';
import axios from 'axios';

const CardJob = props => {
    const token = localStorage.getItem('token')

    const buttonHandler = action => {
        switch(action) {
            case 'reject':
                axios.patch(`http://localhost:3001/applies/${props._id}`, {status: 'Rejected'}, {
                    headers: {
                        token
                    }
                })
                break;
            case 'accept':
                axios.patch(`http://localhost:3001/applies/${props._id}`, {status: 'Accepted'}, {
                    headers: {
                        token
                    }
                })
                break;
        }
    }

    return (
        <div className="w-96 h-64 border-2 border-red-200">
            <h1>{props.companyName}</h1>
            {props.userRole === 'hrd' ? <a href={props.idPelamar.cv}>{props.idPelamar.name}</a> : null}
            <h1>{props.vacancyId.role}</h1>
            <h1 className="bg-yellow-500 text-white">{props.status}</h1>
            {props.userRole === 'hrd' && props.status === 'Pending' ? <button onClick={() => buttonHandler('accept')} className="p-2 bg-red-200 mx-3">Approve</button> : null}
            {props.userRole === 'hrd' && props.status === 'Pending' ? <button onClick={() => buttonHandler('reject')} className="p-2 bg-red-200 mx-3">Reject</button> : null}
        </div>
    )
} 

export default CardJob