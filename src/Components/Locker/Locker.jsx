import React, { useState } from "react";
import CloseLock from "../../Images/CloseLock.png";
import OpenLock from "../../Images/OpenLock.png";

function Locker() {
  const [unixtimestamp, setUnix] = useState(new Date().getTime());
  const [toggle, setToggle] = useState(false);

  const toggleLock = () => {
    setToggle((prevToggle) => !prevToggle);
    setUnix(new Date().getTime());
    console.log(unixtimestamp);
  };

  return (
    <div className="h-[550px] flex flex-col justify-center items-center">
      <div className="h-[350px]">
        <img
          src={toggle ? CloseLock : OpenLock}
          style={{ height: "350px", marginLeft: "8px", marginBottom: "1px" }}
          alt=""
        />
      </div>
      <div className="mt-10">
        <button
          onClick={toggleLock}
          className="mr-16 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-white group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            {toggle ? "On" : "Off"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default Locker;
