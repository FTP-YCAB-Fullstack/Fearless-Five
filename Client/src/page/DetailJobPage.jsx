import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "./../utils/Swal";
import axios from "axios";

const DetailJobPage = (props) => {
  const token = localStorage.getItem("token");
  const [yourData, setYourData] = useState([]);
  let [canApply, setCanApply] = useState(true);

  const state = useSelector((state) => state.user);
  const history = useHistory();
  let data = history.location.state;

  const apply = async () => {
    try {
      const forServer = {
        companyName: data.companyName,
        vacancyId: data._id,
        idPelamar: state._id,
        emailHrd: data.hrdEmail,
      };
      const result = await axios.post(
        "http://localhost:3001/applies",
        forServer,
        {
          headers: {
            token,
          },
        }
      );
      Swal("success", "Apply Success");
      history.push("/profile");
    } catch (err) {
      Swal("error", "Something went wrong");
    }
  };

  const close = async () => {
    const patch = {
      status: "closed",
    };
    const upd = await axios.patch(
      `http://localhost:3001/vacancies/${data._id}`,
      patch,
      {
        headers: {
          token,
        },
      }
    );
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3001/applies?id=" + state._id, {
        headers: {
          token,
        },
      })
      .then((res) => setYourData(res.data.apply));
  }, []);

  useEffect(() => {
    let exist = yourData.find((el) => el.vacancyId._id === data._id);
    if (exist) {
      setCanApply(false);
    }
  }, [yourData]);

  return (
    <div className="bg-gray-100">
      <div className=" flex px-16 pt-10 items-center mb-6 ">
        <div className="h-36 w-36 flex items-center justify-center mb-3">
          <img className="w-24 h-24 sm:w-36 sm:h-36"
            src="https://firebasestorage.googleapis.com/v0/b/uploading-file-14552.appspot.com/o/building-icon-35643.png?alt=media&token=5cd9b5df-6477-472d-a97d-f6477af8d6a9"
            alt=""
          />
        </div>
        <div className="flex pl-8">
          <div className="pb-8 w-auto">
            <p className="text-base sm:text-4xl font-bold">{data.companyName}</p>
            <p className="text-base sm:text-lg">{data.role}</p>
            <p className="text-base sm:text-lg">Rp. {data.rangeSalary.toLocaleString().replaceAll(",", ".")}</p>
            <p className="text-base sm:text-lg">{data.hrdEmail}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="border-b-4 border-gray-400 w-11/12 mb-8"></div>
      </div>

      
        <div className="px-10 sm:px-20">
          <h2 className="text-xl font-bold">{data.status === "open" ? "OPEN" : "CLOSED"}</h2>

          <p className="mt-4 font-bold text-md">DESCRIPTION: <p className="font-normal">{data.job_description}</p></p>

          <div className="mt-4">
            <h1 className="text-md font-bold">BENEFIT:</h1>
            <div className="ml-7">
              <ul>
                {data.benefit.map((el) => (
                  <li className="list-disc font-normal">{el}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-4">
            <h1 className="text-md font-bold">REQUIREMENT:</h1>
            <div className="ml-7">
              <ul>
                {data.requirements.map((el) => (
                  <li className="list-disc font-normal">{el}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <h1 className="text-md font-bold">RESPONSIBILITY:</h1>
            <div className="ml-7">
              <ul>
                {data.responsibility.map((el) => (
                  <li className="list-disc font-normal">{el}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-4">
            <h1 className="text-md font-bold">MANDATORY SKILLS:</h1>
            <div className="ml-7">
              <ul>
                {data.mandatorySkills.map((el) => (
                  <li className="list-disc font-normal">{el}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-4">
            <h1 className="text-md font-bold">GOOD TO HAVE SKILLS:</h1>
            <div className="ml-7">
              <ul>
                {data.goodToHave.map((el) => (
                  <li className="list-disc font-normal">{el}</li>
                ))}
              </ul>
            </div>
          </div>
          {state.cv ? (
            <button
              disabled={state.role === "hrd" || canApply === false ? true : false}
              className="bg-red-500 mb-20 rounded-lg p-2 font-bold text-white mt-4 hover:bg-red-700"
              onClick={apply}
            >
              {state.role === "hrd" || canApply === false
                ? "Cannot Apply"
                : "Apply"}
            </button>
          ) : (
            <p>You cannot apply before you upload your cv</p>
          )}
          {data.hrdEmail === state.email ? (
            <button onClick={close}>Close Job</button>
          ) : null}
      </div>
      
    </div>
  );
};

export default DetailJobPage;
