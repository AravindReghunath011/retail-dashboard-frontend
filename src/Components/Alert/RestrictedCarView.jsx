/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";

const RestrictedCarView = () => {
  const [restrictedCars, setRestrictedCars] = useState([]);

  const fetchRestrictedCars = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/restrictedCars");
      setRestrictedCars(response.data);
    } catch (err) {
      alert("Failed to fetch restricted cars");
    }
  };

  useEffect(() => {
    fetchRestrictedCars();
  }, []);

  return (
    <div className="mb-10 border border-black rounded-3xl p-4 w-[170vh] ml-48 ">
      <h1 className="font-semibold text-xl mb-20">Restricted Car Alerts</h1>
      <div className="mb-10">
        <img 
          className="w-24 h-24 mb-6"
          src="src/assets/car.svg" 
          alt="Car Icon" 
        />
        {/* Dynamically display the number of restricted cars */}
        <span className="text-3xl font-bold ml-9">{restrictedCars.length}</span>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-black w-full text-sm text-left text-gray-600">
          <thead className="bg-black text-white">
            <tr>
              <th className="border border-black px-4 h-20 py-2">DATE</th>
              <th className="border border-black px-4 h-20 py-2">NAME</th>
              <th className="border border-black px-4 h-20 py-2">NUMBER PLATE</th>
              <th className="border border-black px-4 h-20 py-2">COUNTRY</th>
              <th className="border border-black px-4 h-20 py-2">REASON</th>
            </tr>
          </thead>
          <tbody>
            {restrictedCars.map((car) => (
              <tr key={car._id}>
                <td className="border border-black px-4 h-20 py-2">
                  {new Date(car.date).toLocaleDateString()}
                </td>
                <td className="border border-black px-4 h-20 py-2">{car.name}</td>
                <td className="border border-black px-4 h-20 py-2">{car.numberPlate}</td>
                <td className="border border-black px-4 h-20 py-2">{car.country}</td>
                <td className="border border-black px-4 h-20 py-2">{car.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RestrictedCarView;
