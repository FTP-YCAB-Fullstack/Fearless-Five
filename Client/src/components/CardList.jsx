import React from "react";
import { useHistory } from "react-router-dom";

const CardList = (props) => {
  const history = useHistory();

  const onClickHandler = () => {
    history.push(`/jobs/${props._id}`, { ...props });
  };

  return (
    <div className={props.status === 'open' ? '' : 'hidden'}>
      <div className=" pl-24 pb-10">
        <div className="bg-gray-50 w-72 h-64 py-2 pl-2 filter drop-shadow-lg">
          <div className="h-20 flex justify-evenly pt-1">
            <div className="bg-gray-400 w-20">
              <span>kotak</span>
            </div>
            <span className="text-xl font-bold">{props.companyName}</span>
          </div>
          <div className="pl-4">
            <span>Remote</span>
            <br />
            <span>{props.rangeSalary}</span>
            <br />
            <span className="text-lg font-bold">requirements</span>
            <br />
            <span> {props.requirements[0]}</span>
            <br />
            <span>
              <span className="text-lg font-bold">job title</span>
              <br />
              <span>{props.role}</span>
            </span>
            <button onClick={onClickHandler}>apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
