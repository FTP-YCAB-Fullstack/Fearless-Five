import React from "react";
import { useHistory } from "react-router-dom";

const CardList = (props) => {
  const history = useHistory();

  const onClickHandler = () => {
    history.push(`/jobs/${props._id}`, { ...props });
  };

  return (
    <div className={props.status === "open" ? "" : "hidden"}>
      <div className=" pl-10 pb-10">
        <div className="bg-gray-50 w-72 h-auto py-3 pl-2 filter drop-shadow-lg">
          <div className="h-20 flex pl-4 pt-1">
            <div className="bg-gray-400 w-20">
              <span>kotak</span>
            </div>
            <div className="w-auto">
              <div className="pl-2">
                <span className="text-xl font-bold text-left">
                  {props.companyName}
                </span>
              </div>
            </div>
          </div>
          <div className="pl-4">
            <span>Remote</span>
            <br />
            <span>{props.rangeSalary}</span>
            <br />
            <span className="text-lg font-bold">Requirements</span>
            <br />
            <span> {props.requirements[0]}</span>
            <br />
            <span>
              <span className="text-lg font-bold">Job title</span>
              <br />
              <span>{props.role}</span>
            </span>
            <br />
            <div className="flex justify-center pr-5">
              <button
                onClick={onClickHandler}
                className="bg-blue-500 text-white h-8 rounded-md w-20"
              >apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
