/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Admin from "./Admin";

const Add = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Admin />
      <div className="mt-16 fixed top-32 left-[650px] ">
        <div className="flex space-x-5 ">
          <NavLink
            to="/addcamera"
            className={({ isActive }) =>
              `border border-black p-2 rounded-full px-4 ${
                isActive ? "bg-gray-300" : ""
              }`
            }
          >
            Add Camera
          </NavLink>
          <NavLink
            to="/areaselection"
            className={({ isActive }) =>
              `border border-black p-2 rounded-full px-4 ${
                isActive ? "bg-gray-300" : ""
              }`
            }
          >
            Area Selection
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Add;
