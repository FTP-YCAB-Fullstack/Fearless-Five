import React, { useState } from "react";

const PostForm = () => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [jobDecsriptions, setJobDecsriptions] = useState("");
  const [requitmen, setRequitmen] = useState("");
  const [hrd, setHrd] = useState("");
  const [rangeSalary, setRangeSalary] = useState("");
  const [responsibility, setResponesibilty] = useState("");
  const [benefit, setBenefit] = useState("");
  const [mandatorySkills, setMandatorySkills] = useState("");
  const [goodToHaveSkills, setGoodToHaveSkills] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    let PostJob = {
      company,
      role: role,
      jobDecsriptions,
      requitmen,
      hrd,
      rangeSalary: rangeSalary * 1,
      responsibility,
      benefit,
      mandatorySkills,
      goodToHaveSkills,
    };
    setCompany("");
    setRole("");
    setJobDecsriptions("");
    setRequitmen("");
    setHrd("");
    setRangeSalary("");
    setResponesibilty("");
    setBenefit("");
    setMandatorySkills("");
    setGoodToHaveSkills("");
    console.log(PostJob);
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
                value={company}
                onChange={(e) => setCompany(e.target.value)}
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
                value={jobDecsriptions}
                onChange={(e) => setJobDecsriptions(e.target.value)}
                type="text"
              ></textarea>
              <input
                placeholder="requitmen"
                value={requitmen}
                onChange={(e) => setRequitmen(e.target.value)}
                type="text"
              />
              <input
                placeholder="hrd"
                value={hrd}
                onChange={(e) => setHrd(e.target.value)}
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
                value={goodToHaveSkills}
                onChange={(e) => setGoodToHaveSkills(e.target.value)}
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
