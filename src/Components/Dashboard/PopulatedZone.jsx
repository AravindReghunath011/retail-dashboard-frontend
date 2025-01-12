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
import ToggleButton from "./ToggleSwitch";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const PopulatedZone = () => {
  const data = {
    labels: [
      "Zone 1",
      "Zone 2",
      "Zone 3",
      "Zone 4",
      "Zone 5",
      "Zone 6",
      "Zone 7",
      "Zone 8",
    ],
    datasets: [
      {
        label: "Values",
        data: [120, 200, 150, 80, 170, 200, 160, 180],
        backgroundColor: [
          "rgba(34, 197, 94, 0.8)", // Tailwind's green-500
        ],
        borderColor: ["rgba(34, 197, 94, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y", // Makes the bar chart horizontal
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
          borderDash: [5],
        },
        ticks: {
          stepSize: 50,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="p-6 w-[80vw] border-2 ml-52 border-black rounded-3xl mb-10 ">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-xl font-semibold">Most Populated Zone</h1>
      </div>

      <div className="p-4 h-[40vh]">
        <Bar data={data} options={options} />
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-black w-full text-sm text-left text-gray-600">
          <thead className="bg-black text-white">
            <tr>
              <th className="border border-black px-4 h-20 py-2">Date</th>
              <th className="border border-black px-4 h-20 py-2">Zone 1</th>
              <th className="border border-black px-4 h-20 py-2">Zone 2</th>
              <th className="border border-black px-4 h-20 py-2">Zone 3</th>
              <th className="border border-black px-4 h-20 py-2">Zone 4</th>
              <th className="border border-black px-4 h-20 py-2">Zone 5</th>
              <th className="border border-black px-4 h-20 py-2">Zone 6</th>
              <th className="border border-black px-4 h-20 py-2">Zone 7</th>
              <th className="border border-black px-4 h-20 py-2">Zone 8</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-4 h-20 py-2"></td>
              <td className="border border-black px-4 h-20 py-2"></td>
              <td className="border border-black px-4 h-20 py-2"></td>
              <td className="border border-black px-4 h-20 py-2"></td>
              <td className="border border-black px-4 h-20 py-2"></td>
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
              <td className="border border-black px-4 h-20 py-2"></td>
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
              <td className="border border-black px-4 h-20 py-2"></td>
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

export default PopulatedZone;
