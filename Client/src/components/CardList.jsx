import React from "react";
import { useHistory } from "react-router-dom";

const CardList = (props) => {
  const history = useHistory();

  const onClickHandler = () => {
    history.push(`/jobs/${props._id}`, { ...props });
  };

  return (
    <div className={props.status === "open" ? "" : "hidden"}>
      <div className=" pl-10 pb-10">
        <div className="bg-gray-50 w-72 h-auto py-3 pl-2 filter drop-shadow-lg">
          <div className="h-20 flex pl-4 pt-1">
            <div className=" w-20">
              <img
                src="https://lh5.googleusercontent.com/proxy/us1i-yo0mMSbEFwgoN38yomT9-fKaHk_kkv4jmoCiSJliwhyPeyVgXLVcjUuPS9WcZX-oEZdylv6t3uETWd4MqUpl3sveZLUVg3xdtA9MQT00rI=w1200-h630-p-k-no-nu"
                alt=""
                srcset=""
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
              Rp. {props.rangeSalary.toLocaleString().replaceAll(",", ".")}
            </span>
            <br />
            <span className="text-lg font-bold">Requirements</span>
            <br />
            <span> {props.requirements[0]}</span>
            <br />
            <span>
              <span className="text-lg font-bold">Job title</span>
              <br />
              <span>{props.role}</span>
            </span>
            <br />
            <div className="flex justify-center pr-5 pt-4">
              <button
                onClick={onClickHandler}
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
