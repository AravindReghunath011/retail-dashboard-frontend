/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Admin from "./Admin";

const RegisterCar = () => {
  const [formData, setFormData] = useState({
    name: "",
    numberPlate: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch("http://localhost:5000/api/registerCar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        setFormData({ name: "", numberPlate: "", country: "" }); // Reset form after successful submission
      } else {
        alert(data.error || "An error occurred");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Failed to submit the form. Please check the server connection.");
    }
  };

  return (
    <div>
      <Admin />
      <div className="max-w-md mx-auto p-6 border-black border rounded-3xl">
        <div className="bg-gray-100 inline-block px-3 py-1 rounded-md mb-6">
          <span className="text-gray-700">New Car</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center gap-4">
            <label className="text-gray-700 w-28">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="flex-1 p-2 border border-gray-300 rounded-2xl hover:border-black"
              required
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="text-gray-700 w-28">Number Plate</label>
            <input
              type="text"
              name="numberPlate"
              value={formData.numberPlate}
              onChange={handleInputChange}
              className="flex-1 p-2 border border-gray-300 rounded-2xl hover:border-black"
              required
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="text-gray-700 w-28">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="flex-1 p-2 border border-gray-300 rounded-2xl hover:border-black"
              required
            />
          </div>

          <div className="flex flex-col space-y-2 mt-6">
            <button
              type="submit"
              className="w-full py-2 bg-lime-500 rounded-md hover:bg-lime-600"
            >
              Submit
            </button>
            <button
              type="button"
              className="w-full py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-300"
              onClick={() => setFormData({ name: "", numberPlate: "", country: "" })}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterCar;
