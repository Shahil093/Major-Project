import React, { useState } from "react";
import On from "../../Images/On.png";
import Off from "../../Images/Off.png";

function Bulb() {
  const [unixtimestamp, setUnix] = useState(new Date().getTime());
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(true);
    setUnix(new Date().getTime());
    console.log(unixtimestamp);
  };
  
  const offToggle = () => {
    setToggle(false);
    setUnix(new Date().getTime());
    console.log(unixtimestamp);
  };
  return (
    <div className="h-[550px]  flex flex-col justify-center items-center ">
      <div className=" h-[350px]">
        <img src={toggle ? On : Off} className="h-[400px] mb-1" alt="" />
      </div>
      <div className="mt-10">
        <button
          onClick={onToggle}
          class="
                mr-5
                relative inline-flex items-center 
              justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm 
              font-medium text-gray-900 rounded-lg group 
              bg-gradient-to-br
               from-purple-600 to-white
                group-hover:from-purple-600 group-hover:to-blue-500
                 hover:text-white dark:text-white 
                "
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            On
          </span>
        </button>
        <button
          onClick={offToggle}
          class="
                mr-5
                relative inline-flex items-center 
              justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm 
              font-medium text-gray-900 rounded-lg group 
              bg-gradient-to-br
               from-purple-600 to-white
                group-hover:from-purple-600 group-hover:to-blue-500
                 hover:text-white dark:text-white 
                "
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Off
          </span>
        </button>
      </div>
    </div>
  );
}

export default Bulb;
