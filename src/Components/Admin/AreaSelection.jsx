/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Add from "./Add";

const AreaSelection = () => {
  const [selectedCamera, setSelectedCamera] = useState("");

  return (
    <div className="">
      <Add/>
      <div className=" w-[80vw] h-[40vh]  border-black mx-auto p-4 space-y-4">
        <div className="flex items-center gap-4">
          <label className="text-lg font-medium text-gray-900">
            Camera selection
          </label>
          <div className="relative flex-1">
            <select
              value={selectedCamera}
              onChange={(e) => setSelectedCamera(e.target.value)}
              className="w-full p-2 text-gray-400 border border-black rounded-lg appearance-none bg-white pr-8"
            >
              <option value="">Camera selection</option>
              <option value="cam1">Camera 1</option>
              <option value="cam2">Camera 2</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Camera Feed Preview */}
        <div className="w-[85%] justify-self-end rounded-lg border h-[60%] border-black overflow-hidden">
          <img
            src="/api/placeholder/1200/600"
            alt="Camera Feed"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-5 gap-4 h-40 border border-black rounded-lg p-4">
          <div className="border border-black rounded h-full"></div>
          <div className="border border-black rounded h-full"></div>
          <div className="border border-black rounded h-full"></div>
          <div className="border border-black rounded h-full"></div>
          <div className="flex flex-col gap-4">
            <button className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition-colors">
              Save
            </button>
            <button className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaSelection;
