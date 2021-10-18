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
      <div className=" pl-10 pb-10">
        <div className="bg-gray-50 w-72 h-auto py-3 pl-2 filter drop-shadow-lg">
          <div className="h-20 flex pl-4 pt-1">
            <div className=" w-20">
              <img
                src="https://lh3.googleusercontent.com/proxy/QFRHtB-VRxhCfrlEARlw464nk2DFRsir8e5ykKicGcw7r_gxTG3nLl8uA2awcQ1O4mGnqDDTNxipysDHmoprMuZ7LCK1DpB8C1i9X8E_84hHJmdZ3PBR380dIrti9zQvDEjNf9BA"
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
            <span> {props.requirements ? props.requirements[0] : 'Unavailable'}</span>
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
