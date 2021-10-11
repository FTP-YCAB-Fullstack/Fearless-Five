import React from "react";

const CardList = (props) => {
  return (
    <div className="border-4">
       <h3>{props.companyId.name}</h3>
       <h3>{props.role}</h3>
       <h3>{props.rangeSalary}</h3>
       <button className="p-3 bg-red-200 rounded-lg">Details</button>
    </div>
  );
};

export default CardList;
