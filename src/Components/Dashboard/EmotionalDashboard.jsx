/* eslint-disable no-unused-vars */
import React from "react";
import ToggleButton from "../Dashboard/ToggleSwitch";
import { useNavigate } from "react-router-dom";

const EmotionalDashboard = () => {
  const navigate = useNavigate();

  const handleClick2 = () => {
    navigate("/emotionalanalysis");
  };
  return (
    <div>
      <div
        onClick={handleClick2}
        className="bg-white cursor-pointer border border-black rounded-3xl w-[80vh] h-[50vh] p-6"
      >
        <div className="flex justify-between mb-4">
          <h1 className="text-xl font-bold ">Emotional Analysis</h1>
          <ToggleButton />
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
            <div key={emotion} className="flex mt-3 items-center">
              <p className="text-6xl">{emoji}</p>
              <div className="">
                <p className="text-gray-700 text">{emotion}</p>
                <p className="font-semibold">42.61%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmotionalDashboard;
