
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const RestrictedCar = () => {
  const navigate = useNavigate();
  const [restrictedCarCount, setRestrictedCarCount] = useState(0);

  const fetchRestrictedCars = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/restrictedCars");
      setRestrictedCarCount(response.data.length); // Set the count of restricted cars
    } catch (err) {
      console.error("Failed to fetch restricted cars:", err.message);
    }
  };

  useEffect(() => {
    fetchRestrictedCars();
  }, []);

  const handleClick = () => {
    navigate("/restrictedcarview");
  };

  return (
    <div
      onClick={handleClick}
      className="w-[80vh] h-[50vh] cursor-pointer border border-black rounded-3xl p-4"
    >
      <h1 className="font-semibold text-xl mb-28">Restricted Car Alerts</h1>
      <div className="flex justify-center items-end space-x-48 mb-4">
        <div className="flex flex-col items-center">
          <span className="font-bold text-lg">Car</span>
          <img className="w-20 h-20" src="src/assets/car.svg" alt="Car Icon" />
          <span className="font-bold text-2xl">{restrictedCarCount}</span>
        </div>
        <button className="border border-black px-4 w-40 h-6 flex justify-center items-center rounded-lg">
          View
        </button>
      </div>
    </div>
  );
};

export default RestrictedCar;
