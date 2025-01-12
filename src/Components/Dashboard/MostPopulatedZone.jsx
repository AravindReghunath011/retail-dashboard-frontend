/* eslint-disable no-unused-vars */
import React from "react";
import { Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
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

const MostPopulatedZone = () => {

    const navigate = useNavigate()
  
  const handleClick = () => {
    navigate('/populatedzone')
  }
  
  const data = {
    labels: ["Zone A", "Zone B", "Zone C", "Zone D", "Zone E"],
    datasets: [
      {
        label: "Values",
        data: [120, 200, 150, 80, 170],
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
    <div 
    onClick={handleClick}
    className="p-4 bg-white border border-black cursor-pointer rounded-3xl w-[80vh] h-[50vh] ">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Most Populated Zone</h1>
        <ToggleButton />
      </div>
      
      <Bar data={data} options={options} />
    </div>
  );
};

export default MostPopulatedZone;
