
import { useState } from "react";
import Add from "./Add";

const AddCamera = () => {
  const [formData, setFormData] = useState({
    camera: "",
    location: "",
    name: "",
    rtsp: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleDelete = () => {
    setFormData({
      camera: "",
      location: "",
      name: "",
      rtsp: "",
    });
  };

  return (
    <div className="">
     <Add/>

      <div className="p-4 w-[80vw] ml-44 ">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center">
            <label
              htmlFor="camera"
              className="text-lg font-medium text-gray-900 w-48"
            >
              Camera selection
            </label>
            <div className="relative flex-1">
              <select
                id="camera"
                value={formData.camera}
                onChange={(e) =>
                  setFormData({ ...formData, camera: e.target.value })
                }
                className="w-full p-2 border border-black rounded-md appearance-none bg-white pr-8 text-gray-500"
              >
                <option value="">camera selection</option>
                <option value="cam1">Camera 1</option>
                <option value="cam2">Camera 2</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <label
              htmlFor="location"
              className="text-lg font-medium text-gray-900 w-60"
            >
              Location / Room No
            </label>
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              className="w-full p-2 border border-black rounded-md appearance-none bg-white pr-8 text-gray-500"
            />
          </div>

          <div className="flex items-center">
            <label
              htmlFor="name"
              className="text-lg font-medium text-gray-900 w-48"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="flex-1 p-2 border border-black rounded-md"
            />
          </div>

          <div className="flex items-center">
            <label
              htmlFor="rtsp"
              className="text-lg font-medium text-gray-900 w-48"
            >
              RTSP
            </label>
            <input
              type="text"
              id="rtsp"
              value={formData.rtsp}
              onChange={(e) =>
                setFormData({ ...formData, rtsp: e.target.value })
              }
              className="flex-1 p-2 border border-black rounded-md"
            />
          </div>

          <div className="flex gap-4 pt-2">
            <button
              type="submit"
              className="flex-1 bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition-colors"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="flex-1 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
            >
              Deleted
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCamera;
