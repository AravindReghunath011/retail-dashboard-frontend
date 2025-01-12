/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Camera } from "lucide-react";
import Sessions from "./Sessions";


const UserRestrictionForm = () => {
  const [searchName, setSearchName] = useState("");
  const [searchId, setSearchId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    rId: "",
  });

  return (
    <div>
      
      <div className="flex gap-8 justify-center p-6 ">
        {/* Left Section */}
        <div className="w-1/3">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <label className="font-medium w-20">Name</label>
              <input
                type="text"
                className="flex-grow border border-black rounded-md px-2 py-1"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-2">
              <label className="font-medium w-20">ID / R. ID</label>
              <input
                type="text"
                className="flex-grow border border-black rounded-md px-2 py-1"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
              />
            </div>

            <button className="w-full px-3 py-1 text-sm border border-black rounded-md hover:bg-gray-100">
              Search
            </button>

            <div className="space-y-2 mt-4">
              <p className="font-medium">Name: ---------------</p>
              <p className="font-medium">ID: ------------------</p>
              <div className="w-36 h-48 border border-black rounded-lg flex items-center justify-center bg-gray-50">
                <img
                  src="/api/placeholder/192/256"
                  alt="User photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm bg-green-500 text-white rounded-md hover:bg-green-600">
                Submit
              </button>
              <button className="px-3 py-1 text-sm border border-black rounded-md hover:bg-gray-100">
                Cancel
              </button>
              <button className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600">
                Restrict & Give Alert
              </button>
              <button className="px-3 py-1 text-sm border border-black rounded-md hover:bg-gray-100">
                Remove Restriction
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 ml-28">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <label className="font-medium w-20">Name</label>
                <input
                  type="text"
                  className="flex-grow border border-black rounded-md px-2 py-1"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="flex items-center space-x-2">
                <label className="font-medium w-20">Gender</label>
                <input
                  type="text"
                  className="flex-grow border border-black rounded-md px-2 py-1"
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                />
              </div>

              <div className="flex items-center space-x-2">
                <label className="font-medium w-20">R. ID</label>
                <input
                  type="text"
                  className="flex-grow border border-black rounded-md px-2 py-1"
                  value={formData.rId}
                  onChange={(e) =>
                    setFormData({ ...formData, rId: e.target.value })
                  }
                />
              </div>

              <div className="flex items-center space-x-2">
                <label className="font-medium w-20">Reason</label>
                <input
                  type="text"
                  className="flex-grow border border-black rounded-md px-2 py-1"
                  value={formData.rId}
                  onChange={(e) =>
                    setFormData({ ...formData, rId: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="aspect-video border border-black rounded-lg flex flex-col items-center justify-center bg-gray-50 p-2"
                >
                  <Camera className="w-6 h-6 text-gray-400 mb-1" />
                  <button className="px-2 py-1 text-xs border border-black rounded-md hover:bg-gray-100">
                    Upload
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm bg-green-500 text-white rounded-md hover:bg-green-600">
                Submit
              </button>
              <button className="px-3 py-1 text-sm border border-black rounded-md hover:bg-gray-100">
                Cancel
              </button>
              <button className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600">
                Restrict & Give Alert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRestrictionForm;
