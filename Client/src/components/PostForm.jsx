import axios from "axios";
import React, { useState } from "react";
import {useSelector} from 'react-redux'

const PostForm = () => {
  const companyId = useSelector(state => state.user.workNow);
  const [role, setRole] = useState("");
  const [job_description, setJob_description] = useState("");
  const [requirements, setRequirements] = useState("");
  const hrdId = useSelector(state => state.user._id);
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
      companyId,
      role: role,
      job_description,
      requirements,
      hrdId,
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
        <div className="flex justify-center">
          <span className="text-3xl font-bold">Post Job</span>
        </div>
        <div className="flex justify-center">
          <div className=" flex overflow-y-scroll">
            <form
              onSubmit={handleSumbit}
              className="flex flex-col justify-around "
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
               className="outline-none border-2 border-gray-400 h-8 rounded-md "
                placeholder="rangeSalary"
                value={rangeSalary}
                onChange={(e) => setRangeSalary(e.target.value)}
                type="number"
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
              <button>Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
