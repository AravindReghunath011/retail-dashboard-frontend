import ToggleButton from "./ToggleSwitch";

const TheftAlert = () => {
  return (
    <div className="p-6 w-[80vh] h-[50vh]  border border-black rounded-3xl ">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold">Theft Alert</h1>
        <ToggleButton />
      </div>
      <div className="flex space-x-10">
        <div>
          <img className="h-48 w-48 rounded-3xl" src="src/assets/thief.jpg" />
        </div>
        <div>
          <h1 className="mb-4 font-semibold">Total 6</h1>
          <img className="h-14 w-14 mb-4" src="src/assets/bell.svg" />
          <h1 className=" font-semibold">Zone:00</h1>
          <h1 className=" font-semibold">Time:00:00:00</h1>
          <h1 className="font-semibold">Date:00/00/00</h1>
        </div>
      </div>
    </div>
  );
};

export default TheftAlert;
