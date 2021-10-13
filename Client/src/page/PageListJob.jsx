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
      <form className="flex pb-10 flex-col items-center">
        <span>Search job</span>
        <input
          type="text"
          placeholder="search"
          className="outline-none border-2 border-gray-400 h-8 w-72 rounded-md"
        />
      </form>
      <div className="flex flex-wrap w-screen h-96 pl-14 mt-10 overflow-y-scroll ">
          {jobs.map((el, index) => (
            <CardList {...el} key={index} />
          ))}
      </div>
    </div>
  );
};

export default PageListJob;
