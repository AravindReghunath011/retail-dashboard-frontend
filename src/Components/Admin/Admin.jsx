import { NavLink, Outlet } from "react-router-dom";
import { Settings, Cog, Camera, Users, UserX, Car } from "lucide-react";

const Admin = () => {
  const getLinkStyles = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
      isActive
        ? "bg-gray-200 border-black"
        : "bg-white text-gray-700 border-black hover:bg-gray-100"
    }`;

  return (
    <div className="fixed top-32 left-64">
      {/* Navigation Bar */}
      <div className="flex  gap-4 mb-8">
        <NavLink to="/settings" className={getLinkStyles}>
          <Settings size={18} />
          <span>Setting</span>
        </NavLink>

        <NavLink to="/general" className={getLinkStyles}>
          <Cog size={18} />
          <span>General</span>
        </NavLink>

        <NavLink to="/add" className={getLinkStyles}>
          <Camera size={18} />
          <span>Camera setting</span>
        </NavLink>

        <NavLink to="/registernewemployee" className={getLinkStyles}>
          <Users size={18} />
          <span>Employee</span>
        </NavLink>

        <NavLink to="/restrictperson" className={getLinkStyles}>
          <UserX size={18} />
          <span>Restrict Person</span>
        </NavLink>

        <NavLink to="/restrictcar" className={getLinkStyles}>
          <Car size={18} />
          <span>Restrict Car</span>
        </NavLink>

        <NavLink to="/registercar" className={getLinkStyles}>
          <Car size={18} />
          <span>Register car</span>
        </NavLink>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default Admin;
