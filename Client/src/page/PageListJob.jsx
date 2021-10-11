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
    <div className="flex justify-center gap-x-6">
      {jobs.map((el, index) => (
        <CardList {...el} key={index} />
      ))}
    </div>
  );
};

export default PageListJob;
