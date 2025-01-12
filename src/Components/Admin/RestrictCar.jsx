import { useState } from "react";
import axios from "axios";
import Admin from "./Admin";

const CarRestrictionForms = () => {
  // Existing Car Form States
  const [existingName, setExistingName] = useState("");
  const [existingId, setExistingId] = useState("");
  const [existingReason, setExistingReason] = useState("");

  // New Car Form States
  const [newCarName, setNewCarName] = useState("");
  const [newCarNumberPlate, setNewCarNumberPlate] = useState("");
  const [newCarCountry, setNewCarCountry] = useState("");
  const [newCarReason, setNewCarReason] = useState("");

  const handleRestrictCar = async () => {
    //  axios.post('http://localhost:3000/api/restrictCar', {
     axios.post('https://retail-dashboard-backend-h3zk.onrender.com/api/restrictCar', {
      name: newCarName,
      numberPlate: newCarNumberPlate,
      country: newCarCountry,
      reason: newCarReason
    }).then((response)=>{
      alert('successfully restricted the car')
    })

    // Handle response from the server
    console.log(response.data);
  };

  return (
    <div>
      <Admin />
      <div className="flex gap-8 p-4">
        {/* Existing Car Form */}
        <div className="border border-gray-500 rounded-lg p-6 w-[30vw] ">
          <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm mb-4">
            Existing Car
          </div>

          <form className="space-y-20">
            <div className="space-y-4">
            <div className="flex items-center gap-4">
                <label className="text-gray-700 w-24">ID Or R. ID</label>
                <div className="flex flex-1 gap-2">
                  <input
                    type="text"
                    className="flex-1 border border-gray-500 rounded p-2"
                    value={existingId}
                    onChange={(e) => setExistingId(e.target.value)}
                  />
                  <button className="border border-gray-500 rounded px-4 py-2">
                    Search
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <label className="text-gray-700 w-24">Name</label>
                <input
                  type="text"
                  className="flex-1 border border-gray-500 rounded p-2"
                  value={existingName}
                  onChange={(e) => setExistingName(e.target.value)}
                />
              </div>

              

              <div className="flex items-center gap-4">
                <label className="text-gray-700 w-24">Reason</label>
                <input
                  type="text"
                  className="flex-1 border border-gray-500 rounded p-2"
                  value={existingReason}
                  onChange={(e) => setExistingReason(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-2">
                <button className="flex-1 bg-lime-400 rounded py-2 text-gray-700">
                  Submit
                </button>
                <button className="flex-1 border border-gray-500 rounded py-2 text-gray-700">
                  Cancel
                </button>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-lime-400 rounded py-2 text-gray-700">
                  Remove From Restriction
                </button>
                <button onClick={handleRestrictCar} className="flex-1 bg-red-500 text-white rounded py-2">
                  Restrict & Give Alert
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* New Car Form */}
        <div className="border border-gray-500 rounded-lg p-6 w-[30vw]">
          <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm mb-4">
            New Car
          </div>

          <form className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-gray-700 w-32 whitespace-nowrap">
                  Name
                </label>
                <input
                  type="text"
                  className="flex-1 border border-gray-500 rounded p-2"
                  value={newCarName}
                  onChange={(e) => setNewCarName(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="text-gray-700 w-32 whitespace-nowrap">
                  Number Plate
                </label>
                <input
                  type="text"
                  className="flex-1 border border-gray-500 rounded p-2"
                  value={newCarNumberPlate}
                  onChange={(e) => setNewCarNumberPlate(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="text-gray-700 w-32 whitespace-nowrap">
                  Country
                </label>
                <input
                  type="text"
                  className="flex-1 border border-gray-500 rounded p-2"
                  value={newCarCountry}
                  onChange={(e) => setNewCarCountry(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="text-gray-700 w-32 whitespace-nowrap">
                  Reason
                </label>
                <input
                  type="text"
                  className="flex-1 border border-gray-500 rounded p-2"
                  value={newCarReason}
                  onChange={(e) => setNewCarReason(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <button className="flex-1 bg-lime-400 rounded py-2 text-gray-700">
                  Submit
                </button>
                <button className="flex-1 border border-gray-500 rounded py-2 text-gray-700">
                  Cancel
                </button>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-lime-400 rounded py-2 text-gray-700">
                  Remove Restrictions
                </button>
                <button
                  className="flex-1 bg-red-500 text-white rounded py-2"
                  onClick={handleRestrictCar}
                >
                  Restrict & Give Alert
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CarRestrictionForms;
