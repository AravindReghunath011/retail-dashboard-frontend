import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  import { Calendar, SmilePlus, Smile, PartyPopper, Frown, Angry, Skull } from 'lucide-react';
  
  const emotionData = [
    {
      name: 1,
      Happiness: 150,
      Positive: 120,
      Surprise: 100,
      Sadness: 80,
      Anger: 60,
      Disgusting: 40,
    },
    {
      name: 2,
      Happiness: 180,
      Positive: 140,
      Surprise: 120,
      Sadness: 90,
      Anger: 70,
      Disgusting: 50,
    },
    {
      name: 3,
      Happiness: 200,
      Positive: 160,
      Surprise: 140,
      Sadness: 100,
      Anger: 80,
      Disgusting: 60,
    },
    {
      name: 4,
      Happiness: 230,
      Positive: 180,
      Surprise: 160,
      Sadness: 110,
      Anger: 90,
      Disgusting: 70,
    },
    {
      name: 5,
      Happiness: 250,
      Positive: 200,
      Surprise: 180,
      Sadness: 120,
      Anger: 100,
      Disgusting: 80,
    },
  ];
  
  const Table = () => {
    return (
      <div className=" border-2 border-black rounded-3xl p-6 space-y-6 ml-56 mb-10">
        <div className="w-[80vw] flex justify-between items-center">
          {/* Left Section: Statistics */}
          <div className="bg-white rounded-3xl w-[500px] p-6">
            <div className="flex justify-between mb-4">
              <h1 className="text-xl font-bold">Emotional Analysis</h1>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { emotion: "Happiness", emoji: "😊" },
                { emotion: "Sadness", emoji: "😢" },
                { emotion: "Positive", emoji: "😄" },
                { emotion: "Anger", emoji: "😡" },
                { emotion: "Surprise", emoji: "😮" },
                { emotion: "Disgusting", emoji: "🤢" },
              ].map(({ emotion, emoji }) => (
                <div key={emotion} className="text-center flex mt-3 items-center">
                  <p className="text-5xl">{emoji}</p>
                  <div>
                    <p className="text-gray-700 text">{emotion}</p>
                    <p className="font-semibold">42.61%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Right Section: Chart */}
          <div className="w-1/2">
            <div className=" justify-between items-center mb-3">
              <div className="flex space-x-3 mb-2 justify-end">
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
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="h-3 w-3 bg-pink-400 rounded-full"></span>
                  <span>Happiness</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="h-3 w-3 bg-blue-500 rounded-full"></span>
                  <span>Positive</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="h-3 w-3 bg-green-400 rounded-full"></span>
                  <span>Surprise</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="h-3 w-3 bg-yellow-400 rounded-full"></span>
                  <span>Sadness</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="h-3 w-3 bg-red-500 rounded-full"></span>
                  <span>Anger</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="h-3 w-3 bg-gray-500 rounded-full"></span>
                  <span>Disgusting</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer
              width="100%"
              className="-z-20 relative"
              height={250}
            >
              <AreaChart data={emotionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Happiness"
                  stackId="1"
                  stroke="#f472b6"
                  fill="#f9a8d4"
                />
                <Area
                  type="monotone"
                  dataKey="Positive"
                  stackId="1"
                  stroke="#4f46e5"
                  fill="#818cf8"
                />
                <Area
                  type="monotone"
                  dataKey="Surprise"
                  stackId="1"
                  stroke="#22c55e"
                  fill="#86efac"
                />
                <Area
                  type="monotone"
                  dataKey="Sadness"
                  stackId="1"
                  stroke="#eab308"
                  fill="#fde047"
                />
                <Area
                  type="monotone"
                  dataKey="Anger"
                  stackId="1"
                  stroke="#dc2626"
                  fill="#f87171"
                />
                <Area
                  type="monotone"
                  dataKey="Disgusting"
                  stackId="1"
                  stroke="#6b7280"
                  fill="#d1d5db"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="overflow-x-auto">
        <table className="w-full border-collapse borderborder-black">
      <thead className="bg-black text-white">
        <tr>
          <th className="border border-black p-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Date</span>
            </div>
          </th>
          <th className="border border-black p-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <SmilePlus className="w-5 h-5" />
              <span>Happiness</span>
            </div>
          </th>
          <th className="border border-black p-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <Smile className="w-5 h-5" />
              <span>Positive</span>
            </div>
          </th>
          <th className="border border-black p-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <PartyPopper className="w-5 h-5" />
              <span>Surprise</span>
            </div>
          </th>
          <th className="border border-black p-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <Frown className="w-5 h-5" />
              <span>Sadness</span>
            </div>
          </th>
          <th className="border border-black p-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <Angry className="w-5 h-5" />
              <span>Anger</span>
            </div>
          </th>
          <th className="border border-black p-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <Skull className="w-5 h-5" />
              <span>Disgusting</span>
            </div>
          </th>
          <th className="border border-black p-3 text-center">
            <span>Overall</span>
          </th>
          <th className="border border-black p-3 text-center">
            <span>%</span>
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
  
  export default Table;
  