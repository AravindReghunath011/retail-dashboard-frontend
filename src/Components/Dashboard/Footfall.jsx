/* eslint-disable no-unused-vars */
import React from "react";
import ToggleButton from "./ToggleSwitch";
import { useNavigate } from "react-router-dom";

const Footfall = () => {
  const navigate = useNavigate();
  

  const handleClick1 = () => {
    navigate("/customer");
  };

  return (
    <div>
      <div
        onClick={handleClick1}
        className=" cursor-pointer rounded-3xl border w-[80vh] h-[50vh] border-black p-5"
      >
        <div className="flex justify-between">
          <h1 className="text-xl font-semibold">Footfall Counting</h1>
          <ToggleButton />
        </div>
        <div className="flex justify-between mt-10">
          <div className="flex items-end space-x-3">
            <img className="h-20 w-20" src="src/assets/man.jpg" alt="" />
            <span className="text-lg font-semibold">42.61%</span>
          </div>
          <div className="flex items-end space-x-3">
            <img className="h-20 w-20" src="src/assets/woman.jpg" alt="" />
            <span className="text-lg font-semibold">57.39%</span>
          </div>
        </div>
        <div className="flex space-x-8 mt-4 ">
          <div className="flex flex-col border border-black p-1 w-40 items-center rounded-full ">
            <span className="font-semibold text-lg">Total entry</span>
            <span className="text-lg ">1000</span>
          </div>
          <div className="flex flex-col border border-black p-1 w-40 items-center rounded-full ">
            <span className="font-semibold text-lg">Total exit</span>
            <span className="text-lg ">1000</span>
          </div>
          <div className="flex flex-col border border-black p-1 w-40 items-center rounded-full ">
            <span className="font-semibold text-lg">Occupancy Ratio</span>
            <span className="text-lg ">1000</span>
          </div>
        </div>
        <div className="flex space-x-8 mt-4 ">
          <div className="flex flex-col border border-black p-1 w-40 items-center rounded-full ">
            <span className="font-semibold text-lg">Busiest Hour</span>
            <span className="text-lg ">1000</span>
          </div>
          <div className="flex flex-col border border-black p-1 w-40 items-center rounded-full ">
            <span className="font-semibold text-lg">Busiest Day</span>
            <span className="text-lg ">1000</span>
          </div>
          <div className="flex flex-col border border-black p-1 w-40 items-center rounded-full ">
            <span className="font-semibold text-lg">Average Stay</span>
            <span className="text-lg ">1000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footfall;
