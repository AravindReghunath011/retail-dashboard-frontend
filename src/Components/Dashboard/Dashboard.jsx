/* eslint-disable no-unused-vars */
import React from "react";
import ToggleButton from "./ToggleSwitch";
import HeatMapping from "./HeatMapping";
import EmployeeSection from "./EmployeeSection";

import LoyalCustomer from "../Dashboard/LoyalCustomer";
import MostPopulatedZone from "../Dashboard/MostPopulatedZone";
import TheftAlert from "../Dashboard/TheftAlert";
import Footfall from "./Footfall";
import EmotionalDashboard from "./EmotionalDashboard";

const Dashboard = () => {
  return (
    <div className=" ml-[18%] mb-10 w-screen ">
      <div className="">
        <div className="flex mt-8 space-x-8 ">
          <Footfall />
          <EmotionalDashboard />
        </div>

        <div className="flex mt-8 space-x-8 ">
          <LoyalCustomer />

          <MostPopulatedZone />
        </div>
        <div className="flex space-x-8 mt-8 ">
          <HeatMapping />
          <EmployeeSection />
        </div>

        <div className=" flex  space-x-8 mt-8">
          <TheftAlert />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
