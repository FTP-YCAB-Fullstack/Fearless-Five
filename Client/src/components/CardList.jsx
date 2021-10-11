import React from "react";

const CardList = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div>
        <div className="bg-gray-600 w-80 h-80">
          <div className="bg-red-600 h-20 flex justify-center">
            <span>nama perushaan</span>
          </div>
          <span>jakarta utara</span>
          <br />
          <span>1.000.000 - 5.000.000</span>
          <br />
          <span className="text-lg font-bold">requirements</span>
          <br/>
          <span> Pengalaman Reactjs Setahun</span>
          <br />
          <span>
          <span className="text-lg font-bold">job title</span>
          <br/>
          <span>Web Developver</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardList;
