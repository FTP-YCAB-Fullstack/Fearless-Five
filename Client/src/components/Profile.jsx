import React, {useState,useEffect} from 'react';
import axios from 'axios'

const Profile = props => {
    const [info, setInfo] = useState({})

    const getProfile = async token => {
        try {
            const data = await axios.get('http://localhost:3001/users', {
                headers: {
                    token
                }
            });
            setInfo(data.data)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        getProfile(token);
    }, [])

    useEffect(() => {
        console.log(info)
    }, [info])


    return (
        <React.Fragment>
            {
                !info.name ? 
                null :
                <div>
                    <h1>{info.name}</h1>
                    <p>{info.jobTitle}</p>
                    <p>{info.summary}</p>
                    <p>{info.email}</p>
                </div>
            } 
        </React.Fragment>
    )
}

export default Profile;