/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
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

const LoyalCustomer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/loyal");
  };

  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "New Customers",
        data: [10, 15, 20, 25, 30, 35, 40],
        backgroundColor: "rgba(249, 115, 22, 1)", // Tailwind's blue-500
        borderWidth: 1,
        borderColor: "rgba(249, 115, 22, 1)", // Tailwind's blue-500
      },
      {
        label: "Old Customers",
        data: [20, 25, 30, 35, 40, 45, 50],
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
    <div
      onClick={handleClick}
      className="p-4 cursor-pointer w-[80vh] h-[50vh]  bg-white border border-black rounded-3xl"
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Loyal Customer</h1>
        <ToggleButton />
      </div>
      <h2 className="text-xl font-bold text-gray-700 mb-4">Customer Data</h2>

      <div className="h-[35vh] ml-5">
        <Bar className="" data={data} options={options} />
      </div>
    </div>
  );
};

export default LoyalCustomer;
