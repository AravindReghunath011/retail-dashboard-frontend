/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import {
  FaUser,
  FaUserGraduate,
  FaChartBar,
  FaCalendarAlt,
  FaCamera,
  FaMapMarkedAlt,
  FaCogs,
  FaSchool,
  FaChalkboardTeacher,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex">
        <div className="h-28 bg-gray-100 w-56 fixed top-0 left-0"></div>
        <div className="fixed top-0 left-56">
          <div className=" h-16 w-screen bg-zinc-200 flex items-center">
            <img
              className="h-14 justify-center flex items-center w-40 fixed right-2 top-1"
              src="src/assets/vera.jpg"
              alt=""
            />
            <span className="justify-center items-center ml-10">HELLO</span>
          </div>
          <div className="border border-black h-12 flex items-center z-50 bg-gray-100 ">
            <span className="text-lg font-semibold ml-10 ">
              Retail Dashboard
            </span>
            <div className="flex fixed right-20">
              <div className="space-x-2">
                <span>Date</span>
                <input
                  className="border-2 rounded-xl h-8 mt-[3px] border-black p-1"
                  placeholder="DD/MM/YYYY"
                  type="date"
                />
              </div>

              <button className="ml-5 h-8 flex items-center mt-[3px] border-2 border-black rounded-xl p-1">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="h-screen flex  fixed top-28 left-0 bg-black text-gray-300 transition-all duration-0 group w-16 hover:w-56">
          <div className="flex flex-col flex-grow  space-y-4 hover:space-y-1">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-2 ${
                  isActive
                    ? "bg-gray-500 shadow text-white"
                    : " hover:bg-gray-800  text-gray-400"
                }`
              }
            >
              <FaChartBar />
              <span className="hidden group-hover:block text-lg">
                Dashboard
              </span>
            </NavLink>
            <NavLink
              to="/employee"
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-2 ${
                  isActive
                    ? "bg-gray-500 shadow text-white"
                    : "hover:bg-gray-800  text-gray-400"
                } `
              }
            >
              <FaUser />
              <span className="hidden group-hover:block text-lg">Employee</span>
            </NavLink>
            <NavLink
              to="/customer"
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-2 ${
                  isActive
                    ? "bg-gray-500 shadow text-white"
                    : "hover:bg-gray-800  text-gray-400"
                } `
              }
            >
              <FaUserGraduate />
              <span className="hidden group-hover:block text-lg">Customer</span>
            </NavLink>

            <NavLink
              to="/events"
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-2 ${
                  isActive
                    ? "bg-gray-500 shadow text-white"
                    : "hover:bg-gray-800  text-gray-400"
                } `
              }
            >
              <FaCalendarAlt />
              <span className="hidden group-hover:block text-lg">
                Events & Alerts
              </span>
            </NavLink>
            <NavLink
              to="/parking"
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-2 ${
                  isActive
                    ? "bg-gray-500 shadow text-white"
                    : "hover:bg-gray-800  text-gray-400"
                } `
              }
            >
              <FaChalkboardTeacher />
              <span className="hidden group-hover:block text-lg">parking</span>
            </NavLink>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-2 ${
                  isActive
                    ? "bg-gray-500 shadow text-white"
                    : "hover:bg-gray-800  text-gray-400"
                } `
              }
            >
              <FaChalkboardTeacher />
              <span className="hidden group-hover:block text-lg">Admin</span>
            </NavLink>

            <NavLink
              to="/testing"
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-2 ${
                  isActive
                    ? "bg-gray-500 shadow text-white"
                    : "hover:bg-gray-800  text-gray-400"
                } `
              }
            >
              <FaChalkboardTeacher />
              <span className="hidden group-hover:block text-lg">Testing</span>
            </NavLink>

            
            
          </div>
        </div>
      </div>
      <div className=" mt-32 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
