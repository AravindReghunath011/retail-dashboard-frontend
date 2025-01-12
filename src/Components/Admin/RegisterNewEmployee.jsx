/* eslint-disable no-unused-vars */
import RegisterEmployee from "../Dashboard/RegisterEmployee";
import Admin from "./Admin";

const RegisterNewEmployee = () => {
  return (
    <div>
      <Admin />
      <div className="space-y-7 mb-4  mt-16">
        <div className="flex  gap-10  p-8 rounded-3xl border border-black ">
          {/* Left Side: Form Inputs */}
          <div className="flex flex-col space-y-4 w-full ">
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-semibold">Employee ID</label>
              <input
                type="text"
                className="border border-black rounded-lg px-3 py-2 w-full outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter Employee ID"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-semibold">First Name</label>
              <input
                type="text"
                className="border border-black rounded-lg px-3 py-2 w-full outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter First Name"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-semibold">Middle Name</label>
              <input
                type="text"
                className="border border-black rounded-lg px-3 py-2 w-full outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter Middle Name"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-semibold">Last Name</label>
              <input
                type="text"
                className="border border-black rounded-lg px-3 py-2 w-full outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter Last Name"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-semibold">Email</label>
              <input
                type="email"
                className="border border-black rounded-lg px-3 py-2 w-full outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter Email"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-semibold">Phone No</label>
              <input
                type="text"
                className="border border-black rounded-lg px-3 py-2 w-full outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-semibold">Department</label>
              <input
                type="text"
                className="border border-black rounded-lg px-3 py-2 w-full outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter Department"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-semibold">Shift</label>
              <input
                type="text"
                className="border border-black rounded-lg px-3 py-2 w-full outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter Shift"
              />
            </div>
          </div>

          {/* Right Side: Buttons */}
          <div className="flex flex-col space-y-8  w-[500px]">
            <div className="flex flex-col justify-center items-center border h-[150px] border-gray-400 p-6 rounded-lg shadow-sm">
              <button className="flex items-center space-x-2  font-semibold text-lg">
                <span>Open Camera</span>
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex justify-center items-center">
                  +
                </div>
              </button>
              <p className="text-sm mt-2 text-gray-500">Snap 1 Snap 2 Snap 3</p>
            </div>

            <div className="flex flex-col items-center border border-gray-400 p-6 rounded-lg shadow-sm">
              <button className="flex items-center space-x-2  font-semibold text-lg">
                <span>Upload Profile Image</span>
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex justify-center items-center">
                  +
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterNewEmployee;
