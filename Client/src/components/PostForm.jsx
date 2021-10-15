import axios from "axios";
import React, { useState } from "react";
import {useSelector} from 'react-redux'
import Swal from './../utils/Swal'

const PostForm = () => {
  const companyName = useSelector(state => state.user.workNow);
  // const [companyId, setCompanyId] = useState("");
  const [role, setRole] = useState("");
  const [job_description, setJob_description] = useState("");
  const [requirements, setRequirements] = useState("");
  const hrdEmail = useSelector(state => state.user.email);
  // const [hrdId, setHrdId] = useState("");
  const [rangeSalary, setRangeSalary] = useState("");
  const [responsibility, setResponesibilty] = useState("");
  const [benefit, setBenefit] = useState("");
  const [mandatorySkills, setMandatorySkills] = useState("");
  const [goodToHave, setGoodToHave] = useState("");

  const Post = async (data) => {
    try {
      const token = localStorage.getItem("token");
      let response = await axios.post("http://localhost:3001/vacancies", data, {
        headers: {
          token,
        },
      });
      Swal('success', 'New job posted!')
    } catch (error) {
      console.log(error);
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    let PostJob = {
      companyName,
      role: role,
      job_description,
      requirements,
      hrdEmail,
      rangeSalary: rangeSalary * 1,
      responsibility,
      benefit,
      mandatorySkills,
      goodToHave,
    };
    setRole("");
    setJob_description("");
    setRequirements("");
    setRangeSalary("");
    setResponesibilty("");
    setBenefit("");
    setMandatorySkills("");
    setGoodToHave("");
    Post(PostJob);
  };

  return (
    <div className=" w-screen flex justify-center items-center pt-24">
      <div className="w-96">
        <div className="flex justify-center pb-10">
          <span className="text-3xl font-bold">Post Job</span>
        </div>
        <div className="flex justify-center">
          <div className="w-50">
            <form
              onSubmit={handleSumbit}
              className="flex flex-col justify-around h-96 w-80"
            >
              <input
               className="outline-none border-2 border-gray-400 h-8 rounded-md "
                placeholder="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                type="text"
              />
              <textarea
               className="outline-none border-2 border-gray-400 h-8 rounded-md "
                placeholder="job decsriptions"
                value={job_description}
                onChange={(e) => setJob_description(e.target.value)}
                type="text"
              ></textarea>
              <input
               className="outline-none border-2 border-gray-400 h-8 rounded-md "
                placeholder="requitmen"
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                type="text"
              />
              
              <input
                type="number"
                className="outline-none border-2 border-gray-400 h-8 rounded-md "
                placeholder="rangeSalary"
                value={rangeSalary}
                onChange={(e) => setRangeSalary(e.target.value)}
              />
              <input
               className="outline-none border-2 border-gray-400 h-8 rounded-md "
                placeholder="responsibility"
                value={responsibility}
                onChange={(e) => setResponesibilty(e.target.value)}
                type="text"
              />
              <input
               className="outline-none border-2 border-gray-400 h-8 rounded-md "
                placeholder="benefit"
                value={benefit}
                onChange={(e) => setBenefit(e.target.value)}
                type="text"
              />
              <input
               className="outline-none border-2 border-gray-400 h-8 rounded-md "
                placeholder="mandatorySkills"
                value={mandatorySkills}
                onChange={(e) => setMandatorySkills(e.target.value)}
                type="text"
              />
              <input
               className="outline-none border-2 border-gray-400 h-8 rounded-md "
                placeholder="goodToHaveSkills"
                value={goodToHave}
                onChange={(e) => setGoodToHave(e.target.value)}
                type="text"
              />
             <button className="bg-blue-500 text-white h-10 rounded-md">
              Create account
            </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
