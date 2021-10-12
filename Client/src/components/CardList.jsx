import React from "react";
import { useHistory } from "react-router-dom";

const CardList = (props) => {
  const history = useHistory();

  console.log(props);

  const onClickHandler = () => {
    history.push(`/jobs/${props._id}`, { ...props });
  };

  return (
    <div>
      <form className="flex pb-10 flex-col items-center">
        <span>Search job</span>
        <input
          type="text"
          placeholder="search"
          className="outline-none border-2 border-gray-400 h-8 w-72 rounded-md"
        />
      </form>
      <div>
        <div className="bg-gray-50 w-72 h-64 py-2 pl-2 filter drop-shadow-lg">
          <div className="h-20 flex justify-evenly pt-1">
            <div className="bg-gray-400 w-20">
              <span>kotak</span>
            </div>
            <span className="text-xl font-bold">{props.companyId.name}</span>
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
            <button
              onClick={onClickHandler}
              className="p-3 bg-red-200 rounded-lg"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
