/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import removeTask from "../utils/RemoveTask";
import UserContext from "../utils/UserContext";
import { useContext, useEffect } from "react";
import comletedTask from "../utils/CompletedTask";
import Addtask from "../utils/AddTask";
import removeTaskCompleted from "../utils/RemoveTaskCompleted";
import "../App.css";
const TaskCard = (props) => {
  const { globalTigger, setglobalTigger } = useContext(UserContext);
  const { globalTiggerCompleted, setglobalTiggerCompleted } =
    useContext(UserContext);
  console.log("from task card gt: ", globalTigger);
  console.log("from task card gtc:", globalTiggerCompleted);
  const removeTaskCard = (taskname) => {
    const n = removeTask(taskname);
    setglobalTigger(!globalTigger);
    return n;
  };

  const obj = { task: props.task, Priority: props.priority };

  const navMap = {
    1: "red",
    2: "blue",
    3: "green",
  };

  const styleObj = {
    width: "92%",
  };

  return (
    <div className={navMap[props.priority]} style={styleObj}>
      <div className="card w-[92%] h-[12vmin] flex">
        <div className="completeholder w-[10%]  h-full flex justify-center items-center">
          {props.type != "completed" && (
            <div className="container flex justify-center items-center">
              <div className="round" id={props.task}>
                <input
                  type="checkbox"
                  className="c1"
                  onClick={() => {
                    comletedTask(obj);
                    removeTaskCard(props.task);
                    setglobalTiggerCompleted(!globalTiggerCompleted);
                    let inputs = document.querySelectorAll(".c1");
                    for (let i = 0; i < inputs.length; i++) {
                      inputs[i].checked = false;
                    }
                  }}
                />
              </div>
            </div>
          )}
          {props.type === "completed" && (
            <div className="container ">
              <div className="btnholder ml-5 ">
                <div
                  className=" text-[#fff] flex items-center "
                  onClick={() => {
                    Addtask(obj);
                    removeTaskCompleted(props.task);
                    setglobalTigger(!globalTigger);
                    setglobalTiggerCompleted(!globalTiggerCompleted);
                  }}
                >
                  <img
                    className="mb-2"
                    src="left-chevron.png"
                    alt=""
                    height={20}
                    width={20}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="textholder  pl-1 ml-1 w-[82%] ">
          <div className="text flex items-center mt-2 lg:mt-4">
            <p className="text-[3.55vmin] lg:text-[2.75vmin] font-medium">
              {props.task}
            </p>
          </div>
          <div className="flag  mt-1 h-[2.65vmin] w-full ">
            {/* {props.priority === "3" && (
              <img
                src="pin.png"
                className="max-w-full max-h-full object-contain"
                alt=""
              />
            )} */}
            {/* {props.priority === "2" && (
            <img
              src="flag.png"
              className="max-w-full max-h-full object-contain"
              alt=""
            />
          )}
          {props.priority === "1" && (
            <img
              src="red-flag.png"
              className="max-w-full max-h-full object-contain"
              alt=""
            />
          )} */}
          </div>
        </div>
        {props.type != "completed" && (
          <div className="removeholder flex items-center w-[5%]  mr-2 h-full ">
            <img
              src="delete.png"
              className="max-w-full max-h-full object-contain"
              alt=""
              onClick={() => {
                removeTaskCard(props.task);
              }}
            />
          </div>
        )}
        {props.type == "completed" && (
          <div className="removeholder w-[8%] p-2 h-full flex items-center mr-2">
            <img
              src="delete.png"
              className="max-w-full max-h-full object-contain"
              alt=""
              onClick={() => {
                removeTaskCompleted(props.task);
                setglobalTiggerCompleted(!globalTiggerCompleted);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
