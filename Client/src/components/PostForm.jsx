import axios from "axios";
import React, { useState } from "react";
import {useSelector} from 'react-redux'

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
      console.log(response.data);
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
    <div className=" w-screen flex justify-center items-center pb-11">
      <div className="w-96">
        <div className="flex justify-center pb-5">
          <span className="text-3xl font-bold">Post Job</span>
        </div>
        <div className="flex justify-center bg-gray-50 h-auto py-2 pl-7 pr-2 filter drop-shadow-lg w-96">
          <div className=" overflow-y-scroll h-96 ">
            <form
              onSubmit={handleSumbit}
              className="flex flex-col justify-around h-auto w-80 pr-2"
            >
              <span className="pb-1">Role</span>
              <input
               className="outline-none border-2 border-gray-400 h-8 rounded-md "
                value={role}
                onChange={(e) => setRole(e.target.value)}
                type="text"
              />
              <span className="pb-1 pt-2">Job Description</span>
              <textarea
               className="outline-none border-2 border-gray-400 h-20 rounded-md "
                value={job_description}
                onChange={(e) => setJob_description(e.target.value)}
                type="text"
              />
              <span className="pb-1 pt-2"> Requirements </span>
              <textarea
               className="outline-none border-2 border-gray-400 h-20 rounded-md "
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                type="text"
              />
              <span className="pb-1 pt-2"> Range Salary </span>
              <input
                type="number"
                className="outline-none border-2 border-gray-400 h-8 rounded-md "
                value={rangeSalary}
                onChange={(e) => setRangeSalary(e.target.value)}
              />
              <span className="pb-1 pt-2"> Responsibility </span>
              <textarea
               className="outline-none border-2 border-gray-400 h-20 rounded-md "
                value={responsibility}
                onChange={(e) => setResponesibilty(e.target.value)}
                type="text"
              />
              <span className="pb-1 pt-2"> Benefit </span>
              <input
               className="outline-none border-2 border-gray-400 h-8 rounded-md "
                value={benefit}
                onChange={(e) => setBenefit(e.target.value)}
                type="text"
              />
              <span className="pb-1 pt-2"> Mandatory Skills </span>
              <input
               className="outline-none border-2 border-gray-400 h-8 rounded-md "
                value={mandatorySkills}
                onChange={(e) => setMandatorySkills(e.target.value)}
                type="text"
              />
              <span className="pb-1 pt-2"> Good To Have Skills </span>
              <input
               className="outline-none border-2 border-gray-400 h-8 rounded-md "
                value={goodToHave}
                onChange={(e) => setGoodToHave(e.target.value)}
                type="text"
              />
              <br className="pt-2" />
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
