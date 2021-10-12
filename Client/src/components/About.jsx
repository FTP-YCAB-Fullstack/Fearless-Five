import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex justify-center items-center pt-24">
        <span className="text-center font-bold text-4xl">Our Developers</span>
      </div>
      <div className="flex justify-around items-center h-72">
        <div className="flex flex-col items-center">
          <div className="h-48 w-48 border-2 border-black rounded-full flex justify-center ">
            <span>profil</span>
          </div>
          <span className="text-center">name</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-48 w-48 border-2 border-black rounded-full flex justify-center ">
            <span>profil</span>
          </div>
          <span className="text-center">name</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-48 w-48 border-2 border-black rounded-full flex justify-center ">
            <span>profil</span>
          </div>
          <span className="text-center">name</span>
        </div>
      </div>
      <div>
        <div className="border-2"></div>
      </div>
    </div>
  );
};

export default About;
