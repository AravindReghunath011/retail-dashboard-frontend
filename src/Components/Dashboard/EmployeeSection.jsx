import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";

const data = [
  { name: "Area 1", Attendance: 5 },
  { name: "Area 2", Attendance: 8 },
  { name: "Kitchen", Attendance: 4 },
  { name: "Room", Attendance: 7 },
  { name: "Parking", Attendance: 3 },
  { name: "Front Desk", Attendance: 6 },
];

const EmployeeSection = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/employee')
  }
  
  return (
    
      <div 
     onClick={handleClick}
      className=" cursor-pointer border border-black rounded-3xl p-4 w-[80vh] h-[50vh]">
        <h1 className="text-2xl font-semibold mb-5 ml-2">Employee</h1>

        <div className="items-center ml-4">
          <div className="flex space-x-5 ">
            <div className="flex items-center space-x-5">
              <div className="flex flex-col">
                <img className="h-10 w-10" src="src/assets/black.svg" alt="" />
                <span>67</span>
                <span>Head Count</span>
              </div>
              <div className="border border-black h-20"></div>
            </div>

            <div className="flex items-center space-x-5">
              <div className="flex flex-col">
                <img className="h-10 w-10" src="src/assets/green.svg" alt="" />
                <span>82%</span>
                <span>Attendance</span>
              </div>
              <div className="border border-black h-20"></div>
            </div>

            <div className="flex items-center space-x-5">
              <div className="flex flex-col">
                <img className="h-10 w-10" src="src/assets/red.svg" alt="" />
                <span>18%</span>
                <span>Absence</span>
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
          </div>

          <div className="flex p-2 mt-8 -ml-10">
            <div className="bg-white w-full">
              <div className="h-32 w-full">
                <ResponsiveContainer>
                  <BarChart data={data} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} interval={0} />
                    <Tooltip />
                    <Bar dataKey="Attendance" fill="#34d399" barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default EmployeeSection;
