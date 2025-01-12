import  { useState } from "react";

const ToggleButton = () => {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="transition-transform flex border rounded-full w-44 h-8 overflow-hidden">
      <button
        onClick={() => setActiveTab("summary")}
        className={`w-1/2 py-1 text-center ${
          activeTab === "summary"
            ? "bg-gray-200 text-black rounded-full"
            : "bg-white text-gray-500"
        }`}
      >
        Summary
      </button>
      <button
        onClick={() => setActiveTab("detail")}
        className={`w-1/2 py-1 text-center ${
          activeTab === "detail"
            ? "bg-gray-200 text-black rounded-full"
            : "bg-white text-gray-500"
        }`}
      >
        Detail
      </button>
    </div>
  );
};

export default ToggleButton;
