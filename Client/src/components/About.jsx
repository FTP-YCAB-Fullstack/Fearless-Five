import React from "react";

const About = () => {
  return (
    <div className=" pb-96 sm:pb-20 flex flex-col">
      <div className="flex justify-center items-center pb-10">
        <span className="text-center font-bold text-4xl">Our Developers</span>
      </div>
      <div className="flex justify-around px-6 items-center h-72 flex-wrap">
        <div className="flex flex-col items-center pb-10 sm:pb-0">
          <div className="h-48 w-48 border-2 border-black rounded-full flex justify-center ">
            <span>profil</span>
          </div>
          <span className="text-center">name</span>
        </div>
        <div className="flex flex-col items-center pb-10 sm:pb-0">
          <div className="h-48 w-48 border-2 border-black rounded-full flex justify-center ">
            <span>profil</span>
          </div>
          <span className="text-center">name</span>
        </div>
        <div className="flex flex-col items-center pb-10 sm:pb-0">
          <div className="h-48 w-48 border-2 border-black rounded-full flex justify-center ">
            <span>profil</span>
          </div>
          <span className="text-center">name</span>
        </div>
      </div>
      <footer className="mt-40 sm:mt-20 invisible sm:visible">
        <div className="border-2 border-gray-300"></div>
      </footer>
    </div>
  );
};

export default About;
