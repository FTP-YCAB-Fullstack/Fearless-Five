import axios from "axios";
import React, { useState } from "react";

const PostForm = () => {
  const [companyId, setCompanyId] = useState("");
  const [role, setRole] = useState("");
  const [job_description, setJob_description] = useState("");
  const [requirements, setRequirements] = useState("");
  const [hrdId, setHrdId] = useState("");
  const [rangeSalary, setRangeSalary] = useState("");
  const [responsibility, setResponesibilty] = useState("");
  const [benefit, setBenefit] = useState("");
  const [mandatorySkills, setMandatorySkills] = useState("");
  const [goodToHave, setGoodToHave] = useState("");

  const Post = async (data) => {
    try {
      // console.log(data);
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
    setCompanyId("");
    setRole("");
    setJob_description("");
    setRequirements("");
    setHrdId("");
    setRangeSalary("");
    setResponesibilty("");
    setBenefit("");
    setMandatorySkills("");
    setGoodToHave("");
    Post(PostJob);
  };

  return (
    <div className=" h-xl w-screen flex justify-center items-center">
      <div className="w-96">
        <div>
          <span className="text-3xl font-bold">Post Job</span>
        </div>
        <div>
          <div className="h-screen flex">
            <form
              onSubmit={handleSumbit}
              className="flex flex-col justify-around"
            >
              <input
                placeholder="company"
                value={companyId}
                onChange={(e) => setCompanyId(e.target.value)}
                type="text"
              />
              <input
                placeholder="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                type="text"
              />
              <textarea
                placeholder="job decsriptions"
                value={job_description}
                onChange={(e) => setJob_description(e.target.value)}
                type="text"
              ></textarea>
              <input
                placeholder="requitmen"
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                type="text"
              />
              <input
                placeholder="hrd"
                value={hrdId}
                onChange={(e) => setHrdId(e.target.value)}
                type="text"
              />
              <input
                placeholder="rangeSalary"
                value={rangeSalary}
                onChange={(e) => setRangeSalary(e.target.value)}
                type="text"
              />
              <input
                placeholder="responsibility"
                value={responsibility}
                onChange={(e) => setResponesibilty(e.target.value)}
                type="text"
              />
              <input
                placeholder="benefit"
                value={benefit}
                onChange={(e) => setBenefit(e.target.value)}
                type="text"
              />
              <input
                placeholder="mandatorySkills"
                value={mandatorySkills}
                onChange={(e) => setMandatorySkills(e.target.value)}
                type="text"
              />
              <input
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