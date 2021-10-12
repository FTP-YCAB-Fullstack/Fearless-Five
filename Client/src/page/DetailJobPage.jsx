import React from 'react';
import {useHistory} from 'react-router-dom'

const DetailJobPage = props => {
    const history = useHistory();
    let data = history.location.state
    return (
        <div>
            <p>{data.companyName}</p>
            <p>{data.rangeSalary}</p>
        </div>
    )

}

export default DetailJobPage