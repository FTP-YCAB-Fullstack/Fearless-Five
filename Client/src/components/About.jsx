import React from "react";

const About = () => {
  return (
    <div className=" pb-96 sm:pb-20 flex flex-col">
      <div className="flex justify-center items-center pb-10">
        <span className="text-center font-bold text-4xl">Our Developers</span>
      </div>
      <div className="flex justify-around px-6 items-center h-72 flex-wrap">
        <div className="flex flex-col items-center pb-10 sm:pb-0">
          <img
            className=" rounded-md flex justify-center img2"
            src="https://firebasestorage.googleapis.com/v0/b/uploading-file-14552.appspot.com/o/WhatsApp%20Image%202021-10-20%20at%2020.55.37.jpeg?alt=media&token=02b26e0b-a049-44ac-a60d-3a4a87d19aa9"
            alt="noProfile"
          />
          <span className="text-center font-bold">Dedy Yoga</span>
        </div>
        <div className="flex flex-col items-center pb-10 sm:pb-0">
          <img
            className=" rounded-md flex justify-center img"
            src="https://firebasestorage.googleapis.com/v0/b/uploading-file-14552.appspot.com/o/editPhoto_20210907_162456%20(1).jpg?alt=media&token=06463bc1-741f-40d9-9a11-3a5e3f43b970"
            alt="noProfile"
          />
          <span className="text-center font-bold">Ihsan</span>
        </div>
        <div className="flex flex-col items-center pb-10 sm:pb-0">
          <img
            className=" rounded-md flex justify-center img1"
            src="https://firebasestorage.googleapis.com/v0/b/uploading-file-14552.appspot.com/o/WhatsApp%20Image%202021-10-20%20at%2020.55.13.jpeg?alt=media&token=3904f2b1-177f-4b42-9325-486c875168e4 "
            alt="noProfile"
          />
          <span className="text-center font-bold">Gilang</span>
        </div>
      </div>
      <footer className="mt-40 sm:mt-20 invisible sm:visible">
        <div className="border-2 border-gray-300"></div>
      </footer>
    </div>
  );
};

export default About;
