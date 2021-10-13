import React from "react";
import {useSelector} from 'react-redux'

const HomeCon = () => {
  const state = useSelector(state => state);
  console.log(state)
  return (
    <>
      <p className="text-center text-4xl font-bold mt-12">Welcome back, it’s great to see you again!</p>

      <div className="mt-6 text-2xl font-thin text-gray-500">
        <p className="text-center">Remotely is a website that brings together job seekers and employee</p>
        <p className="text-center">searcher, we provide remote jobs services available around the world</p>
      </div>

      <p className="text-4xl text-center font-bold mt-24 underline">What’s Remotely ?</p>

      <div className="flex flex-row justify-around mt-12">
        <div className="w-1/5 h-40 border-2 border-gray-500 rounded-2xl">
          <p className="text-center bottom-0">Built for remote workers</p>
        </div>

        <div className="w-1/5 h-40 border-2 border-gray-500 rounded-2xl">
          <p className="text-center bottom-0">Realtime chat</p>
        </div>

        <div className="w-1/5 h-40 border-2 border-gray-500 rounded-2xl">
          <p className="text-center bottom-0">Upload your CV</p>
        </div>
      </div>

      <div className="flex flex-row justify-around mt-8 font-thin text-justify">
        <p className="w-1/5">We're building a place for remote workers, it's easier to find remote jobs here in Remotely</p>
        <p className="w-1/5">Ask about your responsibility, your sallary, your company and anything</p>
        <p className="w-1/5 text-center">Upload your CV and get hired !</p>
      </div>

      {/* test scroll ke bawah, note: bisa dihapus */}
      <div className="h-40"></div>
    </>
  );
};

export default HomeCon
