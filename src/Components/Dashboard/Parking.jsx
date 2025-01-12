

const Parking = () => {
  const stats = [
    { label: 'Total Available Parking', value: '200' },
    { label: 'Total Entry', value: '120' },
    { label: 'Total Exit', value: '60' },
    { label: 'Available Slot', value: '140' }
  ];

  const tableHeaders = [
    { label: 'Number Plate', icon: '□' },
    { label: 'Country', icon: '🏳️' },
    { label: 'Image', icon: '🚗' },
    { label: 'Date', icon: '📅' },
    { label: 'Entry Time', icon: '⏰' },
    { label: 'Exit Time', icon: '⏰' },
    { label: 'Total Duration', icon: '⏱' },
    { label: 'Zone', icon: '📍' }
  ];

  return (
    <div className="p-4 w-[80vw] ml-52 mx-auto bg-white rounded-3xl border border-black">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 p-2 border border-black rounded-lg">
        <h1 className="text-xl font-bold">Parking Management</h1>
        <div className="flex items-center gap-4">
          <span>Date</span>
          <input type="text" className="border border-black rounded px-3 py-1" />
          <button className="bg-gray-300 px-4 py-1 rounded">Search</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col">
            <div className="bg-black text-white p-2 rounded-t-lg flex  justify-center">
              {stat.label}
            </div>
            <div className="border border-black rounded-b-lg p-4 text-center text-3xl font-bold">
              {stat.value}
              
            </div>
          </div>
        ))}
      </div>

      {/* Total Visitors and Registered */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Total Visitors</label>
          <input type="text" className="border border-black  rounded p-2" />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Total Registered</label>
          <input type="text" className="border border-black rounded p-2" />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="bg-black text-white">
              {tableHeaders.map((header, index) => (
                <th key={index} className="p-3 text-left whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span>{header.icon}</span>
                    <span className="text-sm">{header.label}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(4)].map((_, rowIndex) => (
              <tr key={rowIndex} className="border border-black">
                {[...Array(8)].map((_, colIndex) => (
                  <td key={colIndex} className="p-3 border border-black">
                    &nbsp;
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Parking;


