
import { Clock, Image, User, AlertCircle } from 'lucide-react';

const EmployeeTable = () => {
  // Header configuration
  const headers = [
    { id: 'id', label: 'ID', icon: null },
    { id: 'image', label: 'Image', icon: Image },
    { id: 'name', label: 'Name', icon: User },
    { id: 'workHours', label: 'Work Hours', icon: Clock },
    { id: 'checkIn', label: 'Check-in', icon: Clock },
    { id: 'checkOut', label: 'Check-out', icon: Clock },
    { id: 'dwellTime', label: 'Dwell Time', icon: Clock },
    { id: 'emotionAnalysis', label: 'Emotion Analysis', icon: AlertCircle },
  ];

  // Generate empty rows for demonstration
  const emptyRows = Array(8).fill(null);

  return (
    <div className="w-[170vh] -mt-40 ml-48 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-black text-white">
            {headers.map((header) => (
              <th key={header.id} className="p-3 text-left whitespace-nowrap  border  border-black">
                <div className="flex items-center gap-2">
                  {header.icon && <header.icon size={16} />}
                  {header.label}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {emptyRows.map((_, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header.id} className="p-3  border  border-black">
                  &nbsp;
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;