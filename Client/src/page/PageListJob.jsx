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
    <div>
      <form className="flex pb-5 mt-14 flex-col items-center">
        <span>Search job</span>
        <input
          value={filter}
          type="text"
          placeholder="search"
          className="outline-none border-2 border-gray-400 h-8 w-72 rounded-md"
          onChange={(e) => setFilter(e.target.value)}
        />
      </form>
      <div className="flex flex-wrap w-auto h-96 justify-start mt-10 overflow-y-scroll ">
          {jobs.map((el, index) => (
            // <p>{el.role}</p>
            <CardList {...el} key={index} />
          ))}
      </div>
    </div>
  );
};

export default PageListJob;
