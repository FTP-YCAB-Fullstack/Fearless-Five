import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import axios from "axios";

const PageListJob = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('');
  
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("http://localhost:3001/vacancies", {
        headers: {
          token,
        },
      })
      .then((res) => setJobs(res.data));
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/vacancies?category=${filter}`, {
      headers: {
        token
      }
    })
    .then(res => setJobs(res.data))
  }, [filter]);

  console.log(jobs)

  return (
    <div className="bg-gray-100">
      <form className="flex pb-5 flex-col items-center bg-gray-100">
        <span className="font-bold pb-4">Search job</span>
        <input
          value={filter}
          type="text"
          placeholder="search"
          className="outline-none border-2 border-gray-200 h-8 w-72 pl-2 rounded-sm filter drop-shadow-sm"
          onChange={(e) => setFilter(e.target.value)}
        />
      </form>
      <div className="flex flex-wrap w-full h-full justify-center gap-x-6 mt-10 overflow-y-scroll bg-gray-100 ">
          {jobs.map((el, index) => (
            // <p>{el.role}</p>
            <CardList {...el} key={index} />
          ))}
      </div>
    </div>
  );
};

export default PageListJob;
