import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RestrictedPersons = () => {
  let [data,setData] = useState([])
  let [numberOfRestrictedPerson,setNumberOfRestrictedPerson] = useState(0)

  const navigate = useNavigate()
  useEffect(()=>{
    axios.get('https://retail-dashboard-backend-h3zk.onrender.com/api/getRestrictedList').then((response)=>{
    // axios.get('http://localhost:3000/api/getRestrictedList').then((response)=>{
      console.log(response.data.data,'data')
      setData(response.data.data)
      let person = response.data.data.filter(obj=>obj.type == "person_id")
      console.log(person,'person')
      setNumberOfRestrictedPerson(person.length)
    }).catch(error=>console.log(error))
    // console.log(data,'data alerts')
  },[])

  const handleClick = () => {
    navigate('/restrictedpersonview')
  }
  return (
    <div 
    onClick={handleClick}
    className="w-[80vh] h-[50vh] cursor-pointer border border-black rounded-3xl p-4">
      <h1 className="font-semibold text-xl mb-28">Restricted Person  Alerts</h1>
      <div className="flex justify-center items-end space-x-48 mb-4">
        <div className="flex flex-col  items-center  ">
          <img className="w-20 h-20" src="/red.svg" />
          <span className="font-bold text-2xl">{numberOfRestrictedPerson}</span>
        </div>

        <button  className="border  border-black px-4 w-40 h-6 flex justify-center items-center rounded-lg">
          View
        </button>
      </div>
    </div>
  );
};

export default RestrictedPersons;
