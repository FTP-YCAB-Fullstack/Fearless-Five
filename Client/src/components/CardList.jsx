import React from "react";

const CardList = (props) => {
  return (
    // <div className="border-4">
    //    <h3>{props.companyId}</h3>
    //    <h3>{props.role}</h3>
    //    <h3>{props.rangeSalary}</h3>
    // </div>
    <div className="  w-screen flex justify-center items-center">
      <div>
        <div className="bg-gray-600 w-80 h-80">
          <div className="bg-red-600 h-20 flex justify-center">
            <span>{props.companyId.name}</span>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default CardList;
