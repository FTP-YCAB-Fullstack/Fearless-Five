import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router";

const CardJob = (props) => {
  const [list, setList] = useState(false);
  const token = localStorage.getItem("token");
  const history = useHistory();

  const buttonHandler = async (action) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (action === "reject") {
          axios.patch(
            `https://serene-thicket-70310.herokuapp.com/applies/${props._id}`,
            { status: "Rejected" },
            {
              headers: {
                token,
              },
            }
          );
        } else {
          axios.patch(
            `https://serene-thicket-70310.herokuapp.com/applies/${props._id}`,
            { status: "Accepted" },
            {
              headers: {
                token,
              },
            }
          );
        }
      }
      await props.getLamaran("email", props.email);
      Swal.fire("Action Success", "", "success");
    });
  };

  const deleteApply = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((res) => {
      if (res.isConfirmed) {
        axios
          .delete(
            `https://serene-thicket-70310.herokuapp.com/applies/${props._id}`,
            {
              headers: {
                token,
              },
            }
          )
          .then((res) => {
            Swal.fire("Saved!", "", "success");
            props.getLamaran("email", props.email);
          });
      }
    });
  };

  const goToChat = () => {
    const state = {
      room: `${props.vacancyId._id}${props.idPelamar._id}`,
    };
    history.push("/profile/chat", state);
  };

  return (
    <div className="flex sm:justify-center justify-start h-auto pb-6">
      <div className="card2 bg-gray-100 py-3 flex justify-between sm:filter sm:drop-shadow-lg sm:pl-5 pl-3 flex-wrap">
        <div className="flex w-96 sm:justify-around flex-col sm:flex-row flex-wrap ">
          <div>
            <span className="font-bold">{props.companyName}</span>
          </div>
          <div className="flex flex-col pb-3">
            {props.userRole === "hrd" ? (
              <a href={props.idPelamar.cv} className="font-bold" target="_blank">
                {props.idPelamar.name}
              </a>
            ) : null}
            <span className="font-bold">{props.vacancyId.role}</span>
            <h1 className="bg-yellow-500 w-24 sm:w-32 text-white text-center rounded-sm pb-1">
              {props.status}
            </h1>
          </div>
          <div className=" flex flex-col h-20 sm:items-center items-start gap-2 sm:gap-2 ">
            {props.userRole === "hrd" && props.status === "Pending" ? (
              <button
                onClick={() => buttonHandler("accept")}
                className="bg-blue-500 text-white h-8 px-3 rounded-sm"
              >
                Approve
              </button>
            ) : null}
            {props.userRole === "hrd" && props.status === "Pending" ? (
              <button
                onClick={() => buttonHandler("reject")}
                className="bg-blue-500 text-white h-8 px-6 rounded-sm"
              >
                Reject
              </button>
            ) : null}
            {props.status === "Rejected" || props.status === "Accepted" ? (
              <button
                onClick={() => deleteApply()}
                className="bg-red-500 text-white h-8 px-6 rounded-md font-semibold hover:bg-red-700"
              >
                Delete
              </button>
            ) : null}
            {props.status === "Accepted" && (
              <button
                onClick={goToChat}
                className="bg-blue-500 text-white h-8 px-8 rounded-md font-semibold hover:bg-blue-700"
              >
                Chat
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardJob;
