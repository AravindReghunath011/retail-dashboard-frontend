import { useNavigate } from "react-router-dom";

const Intruder = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/intruderview')
  }
    return (
      <div 
      onClick={handleClick}
      className="w-[80vh] h-[50vh]cursor-pointer border border-black rounded-3xl p-4">
        <h1 className="font-semibold text-xl mb-28">Intruder Alerts</h1>
        <div className="flex justify-center items-end space-x-48 mb-4">
          <div className="flex flex-col  items-center  ">
            <img className="w-20 h-20" src="/red.svg" />
            <span className="font-bold text-2xl">7</span>
          </div>
  
          <button className="border border-black px-4 w-40 h-6 flex justify-center items-center rounded-lg">
            View
          </button>
        </div>
      </div>
    );
  };
  
  export default Intruder;
  