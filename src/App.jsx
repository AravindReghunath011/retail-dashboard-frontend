import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "./Components/Dashboard/Sidebar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Employee from "./Components/Dashboard/Employee";
import Customer from "./Components/Dashboard/Customer";
import Events from "./Components/Dashboard/Events";
import RegisterNewEmployee from "./Components/Admin/RegisterNewEmployee";
import OverallAnalysis from "./Components/Dashboard/OverallAnalysis";
import Admin from "./Components/Admin/Admin";
import AddCamera from "./Components/Admin/AddCamera";
import Add from "./Components/Admin/Add";
import Parking from "./Components/Dashboard/Parking";
import Settings from "./Components/Admin/Settings";
import General from "./Components/Admin/General";
import Testing from "./Components/Testing";
import AreaSelection from "./Components/Admin/AreaSelection";
import RestrictPerson from "./Components/Admin/RestrictPerson";
import RestrictCar from "./Components/Admin/RestrictCar";
import RegisterCar from "./Components/Admin/RegisterCar";
import EmotionalAnalysis from "./Components/Dashboard/EmotionalAnalysis"
import Loyal from "./Components/Dashboard/Loyal";
import PopulatedZone from "./Components/Dashboard/PopulatedZone";
import HeatMappingZone from "./Components/Dashboard/HeatMappingZone"
import RestrictedCarView from "./Components/Alert/RestrictedCarView"
import FireView from "./Components/Alert/FireView"
import IntruderView from "./Components/Alert/IntruderView"
import RestrictedPersonView from "./Components/Alert/RestrictedPersonView"
import ShopLiftingView from "./Components/Alert/ShopLiftingView"
import LoyalCustomer from "./Components/Dashboard/LoyalCustomer";

function App() {
  return (
    <Router>
      <div className="flex items-center justify-center min-h-screen ">
        <Routes>
          <Route path="" element={<Sidebar />}>
            <Route path="/settings" element={<Settings />} />
            <Route path="/loyalcustomer" element={<LoyalCustomer/>}/>
            
            <Route path="/loyal" element={<Loyal/>} />
            
            <Route path="/restrictedcarview" element={<RestrictedCarView/>} />
            <Route path="/fireview" element={<FireView/>} />
            <Route path="/intruderview" element={<IntruderView/>} />
            <Route path="/restrictedpersonview" element={<RestrictedPersonView/>} />
            <Route path="/shopliftingview" element={<ShopLiftingView/>} />
            
            <Route path="/populatedzone" element={<PopulatedZone/>} />
            <Route path="/heatmappingzone" element={<HeatMappingZone/>} />
        
            <Route path="/emotionalanalysis" element={<EmotionalAnalysis/>} />
            <Route path="/testing" element={<Testing />} />
            <Route path="/general" element={<General />} />
            <Route path="/parking" element={<Parking />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/areaselection" element={<AreaSelection />} />
            <Route
              path="/registernewemployee"
              element={<RegisterNewEmployee />}
            />
            <Route path="/registercar" element={<RegisterCar />} />
            <Route path="/restrictcar" element={<RestrictCar />} />
            <Route path="/restrictperson" element={<RestrictPerson />} />
            <Route path="/addcamera" element={<AddCamera />} />
            <Route path="/add" element={<Add />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/employee" element={<Employee />} />

            <Route path="/customer" element={<Customer />} />

            <Route path="/events" element={<Events />} />

            <Route path="/overallanalysis" element={<OverallAnalysis />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
