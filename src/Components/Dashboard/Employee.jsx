/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import ToggleButton from "./ToggleSwitch";
import RegisterEmployee from "./RegisterEmployee";

const data = [
  { name: "Area 1", Attendance: 5 },
  { name: "Area 2", Attendance: 8 },
  { name: "Kitchen", Attendance: 4 },
  { name: "Room", Attendance: 7 },
  { name: "Parking", Attendance: 3 },
  { name: "Front Desk", Attendance: 6 },
];

const Employee = ({onClick}) => {

  const attendanceData = [
    { label: "Today", value: 82 },
    { label: "Week", value: 40 },
    { label: "Month", value: 60 },
    { label: "6 Month", value: 70 },
    { label: "Year", value: 80 },
  ];

  const getNeedleColor = (value) => (value < 50 ? "red" : "green");

  const navigate = useNavigate()

  const handleClick = ()=>{
    navigate('/registernewemployee')
  }

  const handleSubmit = ()=>{
    navigate('/overallanalysis')
  }

  return (
    <div
    onClick={onClick}
    className="ml-36 ">
      <div className="flex gap-10">
        <div 
        onClick={handleSubmit}
        className="border border-black rounded-3xl p-5 mb-10 cursor-pointer ">
          <h1 className="text-2xl font-semibold mb-5 ml-2">Employee</h1>

          <div className=" flex items-center ">
            <div className="flex space-x-5 ">
              <div className="flex items-center space-x-5">
                <div className="flex flex-col">
                  <img
                    className="h-10 w-10"
                    src="src/assets/black.svg"
                    alt=""
                  />
                  <span>67</span>
                  <span>Head Count</span>
                </div>
                <div className="border border-black h-20 "></div>
              </div>

              <div className="flex items-center space-x-5">
                <div className="flex flex-col">
                  <img
                    className="h-10 w-10"
                    src="src/assets/green.svg"
                    alt=""
                  />
                  <span>82%</span>
                  <span>Attendance</span>
                </div>
                <div className="border border-black h-20 "></div>
              </div>

              <div className="flex items-center space-x-5">
                <div className="flex flex-col">
                  <img className="h-10 w-10" src="src/assets/red.svg" alt="" />
                  <span>18%</span>
                  <span>Absance</span>
                </div>
              </div>
            </div>
            <div className="ml-14">
              <div className="flex flex-col items-center">
                <svg viewBox="0 0 100 50" className="w-32 h-16">
                  <path
                    d="M10 45 A40 40 0 0 1 90 45" // Semicircle arc
                    fill="none"
                    stroke="#ddd"
                    strokeWidth="5"
                  />
                  <line
                    x1="50"
                    y1="45"
                    x2={50 + 40 * Math.cos((180 - 82 * 1.8) * (Math.PI / 180))}
                    y2={45 - 40 * Math.sin((180 - 82 * 1.8) * (Math.PI / 180))}
                    stroke="green"
                    strokeWidth="5"
                  />
                  <circle cx="50" cy="45" r="3" fill="black" />
                </svg>
                <div className="text-xl font-bold mt-2">82%</div>
              </div>
            </div>
            <div className="flex space-x-6 ml-20 border border-black p-4 rounded-3xl">
              <div className="flex items-end space-x-3">
                <img className="h-20 w-20" src="src/assets/man.jpg" alt="" />
                <span className="text-lg font-semibold">42.61%</span>
              </div>
              <div className="flex items-end space-x-3">
                <img className="h-20 w-20" src="src/assets/woman.jpg" alt="" />
                <span className="text-lg font-semibold">57.39%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <ToggleButton />
        </div>
      </div>

      <div className="flex justify-around p-4 border border-black rounded-3xl ">
        {attendanceData.map((data, index) => {
          const angle = (data.value / 100) * 180; // Calculate needle angle (0° to 180°)
          const needleX = 50 + 40 * Math.cos((180 - angle) * (Math.PI / 180)); // X coordinate
          const needleY = 45 - 40 * Math.sin((180 - angle) * (Math.PI / 180)); // Y coordinate

          return (
            <div key={index} className="flex flex-col items-center">
              <span className="text-center font-bold mt-2">{data.label}</span>
              <svg viewBox="0 0 100 50" className="w-32 h-16">
                {/* Background arc for the semicircle */}
                <path
                  d="M10 45 A40 40 0 0 1 90 45" // Semicircle arc
                  fill="none"
                  stroke="#ddd"
                  strokeWidth="8"
                />
                {/* Needle */}
                <line
                  x1="50"
                  y1="45"
                  x2={needleX}
                  y2={needleY}
                  stroke={getNeedleColor(data.value)}
                  strokeWidth="5"
                />
                {/* Center circle */}
                <circle cx="50" cy="45" r="3" fill="black" />
              </svg>

              <span className="text-center text-xl font-bold">
                {data.value}%
              </span>
              <button className="mt-2 px-4 py-1 bg-gray-200 rounded hover:bg-gray-300">
                View
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex gap-10 mt-10 w-full justify-between mb-10">
        <div className="flex w-full  ">
          <div className="bg-white rounded-3xl border w-full border-black  p-4 ">
            <h2 className="text-lg font-bold mb-4 text-center">
              Employee Attendance by Department / Area
            </h2>
            <div className="h-28 w-full">
              <ResponsiveContainer>
                <BarChart data={data} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />
                  <Bar dataKey="Attendance" fill="#34d399" barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="cursor-pointer">
          <RegisterEmployee
          onClick={handleClick}
          
          />
        </div>
      </div>

      
    </div>
  );
};

export default Employee;
