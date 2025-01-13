import { useState } from "react";
import RegisterEmployee from "../Dashboard/RegisterEmployee";
import Admin from "./Admin";

const RegisterNewEmployee = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    employeeId: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    department: "",
    shift: "",
  });

  // State for image file and Base64 encoded data
  const [imageFile, setImageFile] = useState(null);

  // State for API responses
  const [restrictedPerson, setRestrictedPerson] = useState(null);
  const [registerFaceResponse, setRegisterFaceResponse] = useState(null);
  const [error, setError] = useState("");

  // Handle form field change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image file change
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Convert image file to Base64
  const convertImageToBase64 = (image) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]); // Extract Base64 from the result
      reader.onerror = reject;
      reader.readAsDataURL(image);
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Convert image to Base64 if an image file is selected
      const imageBase64 = imageFile ? await convertImageToBase64(imageFile) : "";

      // First API: Get restricted person data
      const response1 = await fetch("http://localhost:3000/getRestrictedPerson", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          employeeId: formData.employeeId,
          firstName: formData.firstName,
          middleName: formData.middleName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNo: formData.phoneNo,
          department: formData.department,
          shift: formData.shift,
        }),
      });

      if (response1.ok) {
        const data = await response1.json();
        setRestrictedPerson(data); // Set the restricted person data
        setError(""); // Clear previous errors
      } else {
        setError("Error: Unable to fetch restricted person data.");
        return; // Stop further execution if this API fails
      }

      // Second API: Register face image with Base64 data
      const response2 = await fetch("http://localhost:8000/register_face", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.firstName, // You can adjust this as needed
          file_type: "png", // Assuming PNG format
          image_base64: imageBase64,
        }),
      });

      if (response2.ok) {
        const registerFaceData = await response2.json();
        setRegisterFaceResponse(registerFaceData); // Set face registration response
        setError(""); // Clear previous errors
      } else {
        setError("Error: Unable to register face.");
      }
    } catch (error) {
      setError("An error occurred while processing the data.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Admin />
      <div className="space-y-7 mb-4 mt-16">
        <div className="flex gap-10 p-8 rounded-3xl border border-black">
          {/* Left Side: Form Inputs */}
          <div className="flex flex-col space-y-4 w-full">
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-semibold">Employee ID</label>
              <input
                type="text"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleInputChange}
                className="border border-black rounded-lg px-3 py-2 w-full outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter Employee ID"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-semibold">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="border border-black rounded-lg px-3 py-2 w-full outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter First Name"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-semibold">Middle Name</label>
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleInputChange}
                className="border border-black rounded-lg px-3 py-2 w-full outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter Middle Name"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-semibold">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="border border-black rounded-lg px-3 py-2 w-full outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter Last Name"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border border-black rounded-lg px-3 py-2 w-full outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter Email"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-semibold">Phone No</label>
              <input
                type="text"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleInputChange}
                className="border border-black rounded-lg px-3 py-2 w-full outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-semibold">Department</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                className="border border-black rounded-lg px-3 py-2 w-full outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter Department"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/3 font-semibold">Shift</label>
              <input
                type="text"
                name="shift"
                value={formData.shift}
                onChange={handleInputChange}
                className="border border-black rounded-lg px-3 py-2 w-full outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter Shift"
              />
            </div>
          </div>

          {/* Right Side: Buttons */}
          <div className="flex flex-col space-y-8 w-[500px]">
            <div className="flex flex-col justify-center items-center border h-[150px] border-gray-400 p-6 rounded-lg shadow-sm">
              <button className="flex items-center space-x-2 font-semibold text-lg">
                <span>Open Camera</span>
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex justify-center items-center">
                  +
                </div>
              </button>
              <p className="text-sm mt-2 text-gray-500">Snap 1 Snap 2 Snap 3</p>
            </div>

            <div className="flex flex-col items-center border border-gray-400 p-6 rounded-lg shadow-sm">
              <button className="flex items-center space-x-2 font-semibold text-lg">
                <span>Upload Profile Image</span>
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex justify-center items-center">
                  +
                </div>
              </button>
              <input
                type="file"
                onChange={handleImageChange}
                accept="image/png, image/jpeg"
                className="border border-gray-400 p-2 rounded-md mt-2"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold mt-4"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Display Error or API Responses */}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {restrictedPerson && (
        <div className="text-center mt-4">
          <h3>Restricted Person Data</h3>
          <pre>{JSON.stringify(restrictedPerson, null, 2)}</pre>
        </div>
      )}
      {registerFaceResponse && (
        <div className="text-center mt-4">
          <h3>Face Registration Response</h3>
          <pre>{JSON.stringify(registerFaceResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default RegisterNewEmployee;
