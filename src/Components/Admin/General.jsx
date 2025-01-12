import  { useState } from "react";
import { Upload } from "lucide-react";
import Admin from "./Admin";

const CompanyRegistrationForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    address: "",
    country: "",
    phoneNumber: "",
    userId: "",
    password: "",
    logo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <Admin/>
      <div className="max-w-3xl mx-auto p-6 mt-10 border ">
        <div className="space-y-4">
          {/* Company Name */}
          <div className="flex items-center gap-4">
            <label className="w-32 text-gray-800 font-medium">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="flex-1 p-1 border border-gray-400 hover:border-black rounded-lg"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <label className="w-32 text-gray-800 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="flex-1 p-1 border border-gray-400 hover:border-black rounded-lg"
            />
          </div>

          {/* Address */}
          <div className="flex items-center gap-4">
            <label className="w-32 text-gray-800 font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="flex-1 p-1 border border-gray-400 hover:border-black rounded-lg"
            />
          </div>

          {/* Country */}
          <div className="flex items-center gap-4">
            <label className="w-32 text-gray-800 font-medium">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="flex-1 p-1 border border-gray-400 hover:border-black rounded-lg"
            />
          </div>

          {/* Phone Number */}
          <div className="flex items-center gap-4">
            <label className="w-32 text-gray-800 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="flex-1 p-1 border border-gray-400 hover:border-black rounded-lg"
            />
          </div>

          {/* User ID and Password Row */}
          <div className="flex items-center gap-4">
            <label className="w-32 text-gray-800 font-medium">User ID</label>
            <input
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleInputChange}
              className="flex-1 p-1 border border-gray-400 hover:border-black rounded-lg"
            />
            <label className="w-24 text-gray-800 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="flex-1 p-1 border border-gray-400 hover:border-black rounded-lg"
            />
          </div>

          {/* Upload Logo Section */}
          <div className="flex items-start gap-4">
            <label className="w-32 text-gray-800 font-medium">
              Upload Logo
            </label>
            <div className="border border-gray-400 hover:border-black rounded-lg p-4 w-48">
              <div className="bg-gray-50 h-32 flex items-center justify-center rounded-lg">
                {formData.logo ? (
                  <img
                    src="/api/placeholder/200/100"
                    alt="Logo preview"
                    className="max-h-24 object-contain"
                  />
                ) : (
                  <div className="flex items-center justify-center">
                    <Upload className="h-8 w-8 text-gray-400" />
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-4 flex-1 mt-28">
              <button className="flex-1 py-2 px-4 border border-gray-400 hover:border-black rounded-lg hover:bg-gray-200">
                Edit
              </button>
              <button className="flex-1 py-2 px-4 border border-gray-400 hover:border-black rounded-lg hover:bg-gray-200">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegistrationForm;
