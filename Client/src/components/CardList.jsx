import React from "react";
import { useHistory } from "react-router-dom";

const CardList = (props) => {
  const history = useHistory();

  const onClickHandler = () => {
    history.push(`/jobs/${props._id}`, { ...props });
  };

  const goToLink = () => {
    window.open(props.link)
  }

  return (
    <div className={props.status === "open" ? "" : "hidden"}>
      <div className="py-4">
        <div className="bg-gray-50 w-72 h-auto py-3 pl-2 filter drop-shadow-lg">
          <div className="h-20 flex pl-4 pt-1">
            <div className=" w-20">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/uploading-file-14552.appspot.com/o/building-icon-35643.png?alt=media&token=5cd9b5df-6477-472d-a97d-f6477af8d6a9"
                alt="noimg"
              />
            </div>
            <div className="w-auto">
              <div className="pl-2">
                <span className="text-xl font-bold text-left">
                  {props.companyName}
                </span>
                <br />
                <span>Remote</span>
              </div>
            </div>
          </div>
          <div className="pl-4">
            <br />
            <span className=" text-lg font-bold">Range Salary</span>
            <br />
            <span>
              Rp. {props.rangeSalary ?
              props.rangeSalary.toLocaleString().replaceAll(",", ".") :
              '-'
              }
            </span>
            <br />
            <span className="text-lg font-bold">Requirements</span>
            <br />
            <span> {props.requirements ? `${props.requirements[0].slice(0,25)}...` : 'Unavailable'}</span>
            <br />
            <span>
              <span className="text-lg font-bold">Job title</span>
              <br />
              <span>{props.role}</span>
            </span>
            <br />
            <div className="flex justify-center pr-5 pt-4">
              <button
                onClick={!props.link ? onClickHandler : goToLink}
                className="bg-blue-500 text-white h-8 rounded-md w-20"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
