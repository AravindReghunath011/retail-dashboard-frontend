
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const RestrictedCar = () => {
  let [data,setData] = useState([])
  const navigate = useNavigate();
    let [numberOfRestrictedVehicles,setNumberOfRestrictedvehicle] = useState(0)
  
  const [restrictedCarCount, setRestrictedCarCount] = useState(0);
  useEffect(()=>{
    axios.get('http://localhost:3000/api/getRestrictedList').then((response)=>{
      console.log(response.data.data,'data')
      setData(response.data.data)
      console.log(data,'data')
      let car = response.data.data.filter(obj=>
        obj.type !== "person_id")
      console.log(car,'card')
      setNumberOfRestrictedvehicle(car.length)
    }).catch(error=>console.log(error))
    // console.log(data,'data alerts')
  },[])
  const fetchRestrictedCars = async () => {
    try {
      // const response = await axios.get("http://localhost:3000/api/restrictedCars");
      const response = await axios.get("https://retail-dashboard-backend-h3zk.onrender.com/api/restrictedCars");
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
          <span className="font-bold text-2xl">{numberOfRestrictedVehicles}</span>
        </div>
        <button className="border border-black px-4 w-40 h-6 flex justify-center items-center rounded-lg">
          View
        </button>
      </div>
    </div>
  );
};

export default RestrictedCar;
