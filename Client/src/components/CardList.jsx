import React from "react";
import {useHistory} from 'react-router-dom'

const CardList = (props) => {
  const history = useHistory();

  console.log(props)

  const onClickHandler = () => {
    history.push(`/jobs/${props._id}`, {...props})
  }

  return (
    <div className="border-4">
       <h3>{props.companyId.name}</h3>
       <h3>{props.role}</h3>
       <h3>{props.rangeSalary}</h3>
       <button onClick={onClickHandler} className="p-3 bg-red-200 rounded-lg">Details</button>
    </div>
  );
};

export default CardList;
