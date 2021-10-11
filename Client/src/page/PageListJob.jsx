import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import axios from "axios";

const PageListJob = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3001/vacancies", {
        headers: {
          token,
        },
      })
      .then((res) => setJobs(res.data));
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-around w-screen h-96 px-36 mt-10 overflow-y-scroll ">
        <div className="pb-6">
          {jobs.map((el, index) => (
            <CardList {...el} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageListJob;
