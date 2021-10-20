import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "./../utils/Swal";
import { useHistory } from "react-router";
import './../css/style.css'
  
const PostForm = () => {
  const history = useHistory()
  const companyName = useSelector((state) => state.user.workNow);
  const [role, setRole] = useState("");
  const [job_description, setJob_description] = useState("");
  const [requirements, setRequirements] = useState("");
  const hrdEmail = useSelector((state) => state.user.email);
  const [rangeSalary, setRangeSalary] = useState("");
  const [responsibility, setResponesibilty] = useState("");
  const [benefit, setBenefit] = useState("");
  const [mandatorySkills, setMandatorySkills] = useState("");
  const [goodToHave, setGoodToHave] = useState("");

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

  async function Post (data) {
    try {
      const token = localStorage.getItem("token");
      let response = await axios.post("http://localhost:3001/vacancies", data, {
        headers: {
          token,
        },
      });
      Swal("success", "New job posted!");
      history.push(`/profile`,data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center sm:pt-12">
      <div>
        <div className=" card flex justify-center flex-col items-center rounded-md sm:bg-gray-50 h-auto pt-5 pb-6 pl-7 pr-2 sm:filter sm:drop-shadow-lg">
        <span className="text-3xl font-bold text-center pb-16">Post Job</span>
          <div className=" overflow-y-scroll h-96 ">
            <form
              onSubmit={handleSumbit}
              className=" form flex flex-col justify-around h-auto pr-2"
            >
              <span className="pb-1 font-bold text-gray-700">Role</span>
              <input
                className="outline-none border-2 border-gray-300 h-8 rounded-md pl-2 "
                value={role}
                onChange={(e) => setRole(e.target.value)}
                type="text"
              />
              <span className="pb-1 pt-2 font-bold text-gray-700">Job Description</span>
              <textarea
                className="outline-none border-2 border-gray-300 h-20 rounded-md pl-2"
                value={job_description}
                onChange={(e) => setJob_description(e.target.value)}
                type="text"
              />
              <span className="pb-1 pt-2  font-bold text-gray-700"> Requirements </span>
              <textarea
                className="outline-none border-2 border-gray-300 h-20 rounded-md pl-2 "
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                type="text"
              />
              <span className="pb-1 pt-2 font-bold text-gray-700"> Range Salary </span>
              <input
                type="number"
                className="outline-none border-2 border-gray-300 h-8 rounded-md pl-2 "
                value={rangeSalary}
                onChange={(e) => setRangeSalary(e.target.value)}
              />
              <span className="pb-1 pt-2 font-bold text-gray-700"> Responsibility </span>
              <textarea
                className="outline-none border-2 border-gray-300 h-20 rounded-md pl-2 "
                value={responsibility}
                onChange={(e) => setResponesibilty(e.target.value)}
                type="text"
              />
              <span className="pb-1 pt-2 font-bold text-gray-700"> Benefit </span>
              <input
                className="outline-none border-2 border-gray-300 h-8 rounded-md pl-2 "
                value={benefit}
                onChange={(e) => setBenefit(e.target.value)}
                type="text"
              />
              <span className="pb-1 pt-2 font-bold text-gray-700"> Mandatory Skills </span>
              <input
                className="outline-none border-2 border-gray-300 h-8 rounded-md pl-2 "
                value={mandatorySkills}
                onChange={(e) => setMandatorySkills(e.target.value)}
                type="text"
              />
              <span className="pb-1 pt-2 font-bold text-gray-700"> Good To Have Skills </span>
              <input
                className="outline-none border-2 border-gray-300 h-8 rounded-md pl-2"
                value={goodToHave}
                onChange={(e) => setGoodToHave(e.target.value)}
                type="text"
              />
              <br className="pt-2" />
              <div className="flex justify-center">
              <button className="Button bg-blue-500 text-white h-10 rounded-md utline-none w-96">
                Create 
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
