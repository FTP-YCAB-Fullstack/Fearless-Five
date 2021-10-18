import React from "react";
import {useSelector} from 'react-redux'

const HomeCon = () => {
  const state = useSelector(state => state);
  console.log(state)
  return (
    <>
      <div className="">
        <div>
          <p className="text-center text-4xl font-bold">Welcome back, it’s great to see you again!</p>
          <div className="mt-6 text-2xl font-thin text-gray-500">
            <p className="text-center">Remotely is a website that brings together job seekers and employee</p>
            <p className="text-center">searcher, we provide remote jobs services available around the world</p>
          </div>
        </div>

        <p className="text-4xl text-center font-bold mt-24 underline">What’s Remotely ?</p>

        <div className="flex flex-row flex-wrap justify-around mt-12">
          <div className="">
            <img
            className="w-36 m-auto" 
            src="https://userscontent2.emaze.com/images/337c75d4-fc17-4ebb-8742-669b9bf4588a/981cb12586573604e2abea6975bbe363.png" 
            alt="" />
            <p className="text-center text-lg font-bold bottom-0">Built for remote workers</p>
            <p className="px-2 w-48">We're building a place for remote workers, it's easier to find remote jobs here in Remotely</p>
          </div>

          <div className="">
            <img
            className="w-36 h-36 m-auto" 
            src="https://png.pngitem.com/pimgs/s/81-818753_free-download-at-icons8-live-chat-icon-png.png" 
            alt="" />
            <p className="text-center text-lg font-bold bottom-0">Real Time Chat App</p>
            <p className="px-2 w-48">Ask about your responsibility, your sallary, your company and anything</p>
          </div>

          <div className="">
            <img
            className="w-36 h-36 m-auto" 
            src="https://www.freeiconspng.com/thumbs/resume-icon-png/resume-icon-png-15.png" 
            alt="" />
            <p className="text-center text-lg font-bold bottom-0">Easy to Apply and Get Job</p>
            <p className="px-2 w-48">Upload your CV and get hired !, Simple as that, no need for email</p>
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-around font-thin text-justify">
        </div>
      </div>

      {/* test scroll ke bawah, note: bisa dihapus */}
      <div className="h-40"></div>
    </>
  );
};

export default HomeCon
