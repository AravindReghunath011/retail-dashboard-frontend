/* eslint-disable no-unused-vars */
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Calendar, Percent, User } from "lucide-react";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Loyal = () => {
  const data = {
    labels: ["Day1", "Day2", "Day3"],
    datasets: [
      {
        label: "New Customers",
        data: [25, 30, 35, 40],
        backgroundColor: "rgba(249, 115, 22, 1)",
        borderWidth: 1,
        borderColor: "rgba(249, 115, 22, 1)",
      },
      {
        label: "Repeated Customers",
        data: [35, 40, 45, 50],
        backgroundColor: "rgba(34, 197, 94, 0.8)", // Tailwind's green-500
        borderWidth: 1,
        borderColor: "rgba(34, 197, 94, 1)", // Tailwind's green-500
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          borderDash: [5],
        },
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <div className="p-6  w-[80vw] border-2 border-black rounded-3xl ml-52 mb-10 ">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold">Loyal Customer</h1>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-10 ml-28">
          <div className="flex flex-col">
            <img className="h-32 w-32" src="src/assets/orange.svg" alt="" />
            <span className="font-semibold">New Customer</span>
            <span className="font-bold text-xl">42.61%</span>
          </div>
          <div className="flex flex-col">
            <img className="h-32 w-32" src="src/assets/greenn.svg" />
            <span className="font-semibold text-">Repeated Customer</span>
            <span className="font-bold text-xl">42.61%</span>
          </div>
        </div>
        <div className="h-1/2 w-1/2">
          <Bar className="" data={data} options={options} />
        </div>
      </div>

      <div className="overflow-x-auto mt-10">
        <table className="table-auto border-collapse border border-black w-full text-sm text-left text-gray-600">
          <thead className="bg-black text-white ">
            <tr>
              <th className="border border-black px-4 h-20 py-2">
                <div className="flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Date</span>
                </div>
              </th>

              <th className="border border-black px-4 h-20 py-2">
                <div className="flex items-center justify-center gap-2">
                  <User className="w-5 h-5" />
                  <span>Repeated Customer</span>
                </div>
              </th>
              <th className="border border-black px-4 h-20 py-2">
                <div className="flex items-center justify-center gap-2">
                  <User className="w-5 h-5" />
                  <span>New Customer</span>
                </div>
              </th>
              <th className="border border-black px-4 h-20 py-2">
                <div className="flex items-center justify-center gap-2">
                  <Percent className="w-5 h-5" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-4 h-20 py-2"></td>
              <td className="border border-black px-4 h-20 py-2"></td>
              <td className="border border-black px-4 h-20 py-2"></td>
              <td className="border border-black px-4 h-20 py-2"></td>
            </tr>
            <tr>
              <td className="border border-black px-4 h-20 py-2"></td>
              <td className="border border-black px-4 h-20 py-2"></td>
              <td className="border border-black px-4 h-20 py-2"></td>
              <td className="border border-black px-4 h-20 py-2"></td>
            </tr>
            <tr>
              <td className="border border-black px-4 h-20 py-2"></td>
              <td className="border border-black px-4 h-20 py-2"></td>
              <td className="border border-black px-4 h-20 py-2"></td>
              <td className="border border-black px-4 h-20 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Loyal;
