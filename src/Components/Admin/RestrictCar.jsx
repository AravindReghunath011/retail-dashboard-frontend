

import Admin from "./Admin";

const CarRestrictionForms = () => {
  return (
    <div>
      <Admin/>
      <div className="flex gap-8 p-4">
        <div className="border border-gray-500 rounded-lg p-6 w-[30vw] ">
          <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm mb-4">
            Existing Car
          </div>

          <form className="space-y-20">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-gray-700 w-24">Name</label>
                <input
                  type="text"
                  className="flex-1 border border-gray-500 rounded p-2"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="text-gray-700 w-24">ID Or R. ID</label>
                <div className="flex flex-1 gap-2">
                  <input
                    type="text"
                    className="flex-1 border border-gray-500 rounded p-2"
                  />
                  <button className="border border-gray-500 rounded px-4 py-2">
                    Search
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <label className="text-gray-700 w-24">Reason</label>
                <input
                  type="text"
                  className="flex-1 border border-gray-500 rounded p-2"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-2">
                <button className="flex-1 bg-lime-400 rounded py-2 text-gray-700">
                  Submit
                </button>
                <button className="flex-1 border border-gray-500 rounded py-2 text-gray-700">
                  Cancel
                </button>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-lime-400 rounded py-2 text-gray-700">
                  Remove From Restriction
                </button>
                <button className="flex-1 bg-red-500 text-white rounded py-2">
                  Restrict & Give Alert
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* New Car Form */}
        <div className="border border-gray-500 rounded-lg p-6 w-[30vw]">
          <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm mb-4">
            New Car
          </div>

          <form className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-gray-700 w-32 whitespace-nowrap">
                  Name
                </label>
                <input
                  type="text"
                  className="flex-1 border border-gray-500 rounded p-2"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="text-gray-700 w-32 whitespace-nowrap">
                  Number Plate
                </label>
                <input
                  type="text"
                  className="flex-1 border border-gray-500 rounded p-2"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="text-gray-700 w-32 whitespace-nowrap">
                  Country
                </label>
                <input
                  type="text"
                  className="flex-1 border border-gray-500 rounded p-2"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="text-gray-700 w-32 whitespace-nowrap">
                  Reason
                </label>
                <input
                  type="text"
                  className="flex-1 border border-gray-500 rounded p-2"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <button className="flex-1 bg-lime-400 rounded py-2 text-gray-700">
                  Submit
                </button>
                <button className="flex-1 border border-gray-500 rounded py-2 text-gray-700">
                  Cancel
                </button>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-lime-400 rounded py-2 text-gray-700">
                  Remove Restrictions
                </button>
                <button className="flex-1 bg-red-500 text-white rounded py-2">
                  Restrict & Give Alert
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CarRestrictionForms;
