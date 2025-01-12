
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";


// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler);

const HeatMappingZone = () => {
 

  // Chart data
  const data = {
    labels: [
      "2020-02-01 12:00",
      "2020-02-01 13:00",
      "2020-02-01 14:00",
      "2020-02-01 15:00",
      "2020-02-01 16:00",
      "2020-02-01 17:00",
    ],
    datasets: [
      {
        label: "Main Entrance",
        data: [20, 40, 50, 30, 60, 80],
        borderColor: "rgba(255, 140, 0, 1)",
        backgroundColor: "rgba(255, 140, 0, 0.2)",
        fill: true,
      },
      {
        label: "Storage Room",
        data: [10, 20, 30, 50, 40, 60],
        borderColor: "rgba(255, 165, 0, 1)",
        backgroundColor: "rgba(255, 165, 0, 0.2)",
        fill: true,
      },
      {
        label: "Area 1",
        data: [30, 50, 40, 70, 60, 90],
        borderColor: "rgba(255, 180, 0, 1)",
        backgroundColor: "rgba(255, 180, 0, 0.2)",
        fill: true,
      },
      {
        label: "Area 2",
        data: [5, 25, 35, 20, 40, 50],
        borderColor: "rgba(255, 200, 0, 1)",
        backgroundColor: "rgba(255, 200, 0, 0.2)",
        fill: true,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: { color: "#666" },
      },
      y: {
        ticks: { color: "#666" },
      },
    },
  };

  return (
    <div  className="p-4  w-[80vw] ml-52 bg-white rounded-3xl border  border-black mb-10 ">
  
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Heat Mapping</h1>
      
      </div>

      {/* Legend */}
      <div className="mb-2">
        <ul className="">
          <li className="flex items-center text-lg">
            <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
            Main Entrance
          </li>
          <li className="flex items-center text-lg">
            <span className="w-3 h-3 bg-orange-400 rounded-full mr-2"></span>
            Storage Room
          </li>
          <li className="flex items-center text-lg">
            <span className="w-3 h-3 bg-orange-300 rounded-full mr-2"></span>
            Area 1
          </li>
          <li className="flex items-center text-lg">
            <span className="w-3 h-3 bg-orange-200 rounded-full mr-2"></span>
            Area 2
          </li>
        </ul>
      </div>

      {/* Chart */}
      <div className="h-40">
        <Line data={data} options={options} />
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

export default HeatMappingZone;
