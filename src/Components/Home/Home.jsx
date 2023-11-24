import React from "react";
import { Link, NavLink } from "react-router-dom";
function Home() {
  return (
    <>
      <div class=" relative ">
        <section class="h-[100%]">
          <div class="mx-auto relative z-20">
            <div class="mx-auto text-center">
              <h1 class="text-5xl font-bold">
                <span class=" w-[100%] inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white">
                  A NEW VARIANT OF IOT ENABLED OPTIMIZATION OF SECURE SMART HOME
                  SYSTEM USING BLOCKCHAIN TECHNOLOGY
                </span>
              </h1>
              <div className="mt-[100px]">
                <NavLink to="/bulb">
                  <button
                    class="
                mr-10
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
                      Join As Bulb
                    </span>
                  </button>
                </NavLink>

                <NavLink to="/fan">
                  <button class="mr-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-white group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white ">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Join As Fan
                    </span>
                  </button>
                </NavLink>
                <button class="mr-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-white group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white ">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Join As Toaster
                  </span>
                </button>
                <NavLink to= "/locker">
                  <button class="mr-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-white group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white ">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Join As Locker
                    </span>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
