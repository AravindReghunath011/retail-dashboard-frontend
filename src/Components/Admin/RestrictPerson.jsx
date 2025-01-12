import { useState } from "react";
import { Camera } from "lucide-react";
import Admin from "./Admin";
import axios from "axios";

const RestrictPerson = () => {
  const [searchName, setSearchName] = useState("");
  const [searchId, setSearchId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    rId: "",
    reason: "",
  });
  const [uploadedImages, setUploadedImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const CLOUD_NAME = "dylsjxrjj"; // Replace with your Cloudinary cloud name
  const UPLOAD_PRESET = "xwthh6f8"; // Replace with your Cloudinary upload preset

  const handleImageUpload = async (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET);

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          formData
        );
        const imageUrl = response.data.secure_url;

        // Update the uploaded images state with the Cloudinary URL
        setUploadedImages((prev) => ({
          ...prev,
          [index]: imageUrl,
        }));
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to upload image to Cloudinary.");
      }
    }
  };

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.gender ||
      !formData.rId ||
      !formData.reason
    ) {
      alert("All fields are required");
      return;
    }

    const images = Object.values(uploadedImages).filter(Boolean); // Include only uploaded images

    try {
      const response = await fetch("http://localhost:5000/api/restrictPerson", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, images }),
      });

      if (response.ok) {
        alert("Restricted person added successfully!");
        setFormData({ name: "", gender: "", rId: "", reason: "" });
        setUploadedImages({ 1: null, 2: null, 3: null, 4: null });
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Failed to add restricted person");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <Admin />
      <div className="flex gap-8 justify-center p-6 mt-10">
        {/* Left Section */}
        <div className="border relative border-black p-4 rounded-3xl w-[30vw]">
          <div className="space-y-4">
            <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm">
              Existing ID
            </div>
            <div className="flex items-center space-x-2">
              <label className="font-medium w-20">Name</label>
              <input
                type="text"
                className="flex-grow border border-black rounded-md px-2 py-1"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-2">
              <label className="font-medium w-20">ID / R. ID</label>
              <input
                type="text"
                className="flex-grow border border-black rounded-md px-2 py-1"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
              />
            </div>

            <button className="w-40 ml-[21%] px-3 py-1 text-sm border border-black rounded-md hover:bg-gray-100">
              Search
            </button>
            <div className="border border-black ">
              hey
            </div>

            <div className="flex  space-x-2 absolute bottom-4 left-4">
              <button className="px-3 py-1 text-sm border border-black rounded-lg  bg-lime-500 hover:bg-lime-600">
                Remove from Restrictions
              </button>
              <button className="px-3 py-1 text-sm border border-black rounded-lg bg-gray-100">
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="border border-black p-4 rounded-3xl w-[30vw]">
          <div className="space-y-4">
            <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm">
              New ID
            </div>
            <div className="flex items-center space-x-2">
              <label className="font-medium w-20">Name</label>
              <input
                type="text"
                className="flex-grow border border-black rounded-md px-2 py-1"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="flex items-center space-x-2">
              <label className="font-medium w-20">Gender</label>
              <input
                type="text"
                className="flex-grow border border-black rounded-md px-2 py-1"
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />
            </div>

            <div className="flex items-center space-x-2">
              <label className="font-medium w-20">R. ID</label>
              <input
                type="text"
                className="flex-grow border border-black rounded-md px-2 py-1"
                value={formData.rId}
                onChange={(e) =>
                  setFormData({ ...formData, rId: e.target.value })
                }
              />
            </div>

            <div className="flex items-center space-x-2">
              <label className="font-medium w-20">Reason</label>
              <input
                type="text"
                className="flex-grow border border-black rounded-md px-2 py-1"
                value={formData.reason}
                onChange={(e) =>
                  setFormData({ ...formData, reason: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="aspect-video border border-black rounded-lg flex flex-col items-center justify-center bg-gray-50 p-2 relative overflow-hidden"
                >
                  {uploadedImages[index] ? (
                    <img
                      src={uploadedImages[index]}
                      alt={`Upload ${index}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <Camera className="w-6 h-6 text-gray-400 mb-1" />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(index, e)}
                    className="hidden"
                    id={`file-upload-${index}`}
                  />
                  <label
                    htmlFor={`file-upload-${index}`}
                    className="px-2 py-1 text-xs border border-black rounded-md hover:bg-gray-100 cursor-pointer bg-white z-10"
                  >
                    Upload
                  </label>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={handleSubmit}
              >
                Restrict & Give Alert
              </button>
              <button className="px-3 py-1 text-sm border border-black rounded-md hover:bg-gray-100">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestrictPerson;
