// import React from "react";
import { Calendar, Clock, Users, UserRound, Percent } from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const peopleData = [
  { name: 1, Male: 1200, Female: 800 },
  { name: 2, Male: 1400, Female: 1000 },
  { name: 3, Male: 2000, Female: 1500 },
  { name: 4, Male: 2400, Female: 1800 },
  { name: 5, Male: 2200, Female: 1600 },
];

const Customer = () => {
  return (
    <div className="flex flex-col gap-10 mb-4 border-2 border-black p-6 ml-52 rounded-3xl">
      {/* People Counting Section */}
      <div className="w-[80vw]  rounded-3xl p-5 flex justify-between items-center">
        {/* Left Section: Statistics */}
        <div className="rounded-3xl p-5 w-[500px]">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold">Footfall Counting</h1>
          </div>
          <div className="flex justify-between mt-10">
            <div className="flex items-end space-x-3">
              <img className="h-20 w-20" src="src/assets/man.jpg" alt="Man" />
              <span className="text-lg font-semibold">42.61%</span>
            </div>
            <div className="flex items-end space-x-3">
              <img
                className="h-20 w-20"
                src="src/assets/woman.jpg"
                alt="Woman"
              />
              <span className="text-lg font-semibold">57.39%</span>
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <div className="flex flex-col border border-black p-1 w-40 items-center rounded-full">
              <span>Total Entry</span>
              <span>2436</span>
            </div>
            <div className="flex flex-col border border-black p-1 w-40 items-center rounded-full">
              <span>Total Exit</span>
              <span>2265</span>
            </div>
            <div className="flex flex-col border border-black p-1 w-40 items-center rounded-full">
              <span>Occupancy Ratio</span>
              <span>105.2%</span>
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <div className="flex flex-col border border-black p-1 w-40 items-center rounded-full">
              <span>Busiest Hour</span>
              <span>7:30 PM - 8:50 PM</span>
            </div>
            <div className="flex flex-col border border-black p-1 w-40 items-center rounded-full">
              <span>Busiest Day</span>
              <span>Thursday</span>
            </div>
            <div className="flex flex-col border border-black p-1 w-40 items-center rounded-full">
              <span>Average Stay</span>
              <span>00:19:34</span>
            </div>
          </div>
        </div>

        {/* Right Section: Chart */}
        <div className="w-1/2">
          <div className="flex justify-end space-x-3 mb-3">
            <button className="px-4 py-2 rounded-lg bg-gray-200 font-medium">
              Daily
            </button>
            <button className="px-4 py-2 rounded-lg bg-gray-200 font-medium">
              Weekly
            </button>
            <button className="px-4 py-2 rounded-lg bg-gray-200 font-medium">
              Monthly
            </button>
            <button className="px-4 py-2 rounded-lg bg-gray-200 font-medium">
              Yearly
            </button>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart className="" data={peopleData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="Male"
                stackId="1"
                stroke="#4f46e5"
                fill="#818cf8"
              />
              <Area
                type="monotone"
                dataKey="Female"
                stackId="1"
                stroke="#ec4899"
                fill="#f472b6"
              />
          
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="overflow-x-auto">
      <table className="w-full border-collapse borderborder-black">
      <thead className="bg-black text-white">
        <tr>
          <th className="borderborder-black p-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Date</span>
            </div>
          </th>
          <th className="borderborder-black p-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <UserRound className="w-5 h-5" />
              <span>Male</span>
            </div>
          </th>
          <th className="borderborder-black p-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <UserRound className="w-5 h-5" />
              <span>Female</span>
            </div>
          </th>
          <th className="borderborder-black p-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              <span>Total Entry</span>
            </div>
          </th>
          <th className="borderborder-black p-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              <span>Head count</span>
            </div>
          </th>
          <th className="borderborder-black p-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Busiest Hour</span>
            </div>
          </th>
          <th className="borderborder-black p-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <Percent className="w-5 h-5" />
              <span>Occupancy Ratio</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3].map((row) => (
          <tr key={row}>
            <td className="border border-black p-3 h-16"></td>
            <td className="border border-black p-3 h-16"></td>
            <td className="border border-black p-3 h-16"></td>
            <td className="border border-black p-3 h-16"></td>
            <td className="border border-black p-3 h-16"></td>
            <td className="border border-black p-3 h-16"></td>
            <td className="border border-black p-3 h-16"></td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
    </div>
  );
};

export default Customer;
