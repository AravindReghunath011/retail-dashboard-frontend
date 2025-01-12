/* eslint-disable no-unused-vars */
import React from "react";
import RestrictedPersons from "../Alert/RestrictedPerson";
import RestrictedCar from "../Alert/RestrictedCar";
import ShopLifting from "../Alert/ShopLifting";
import Intruder from "../Alert/Intruder";
import Fire from "../Alert/Fire";

const Events = () => {
  return (
    <div className="mb-10 ml-48">
      <div className="flex space-x-8 mb-6">
        <RestrictedPersons />
        <RestrictedCar />
      </div>
      <div className="flex space-x-8">
        <ShopLifting />
        <Intruder/>
      </div>
      <div className="mt-6">
        <Fire/>
      </div>
    </div>
  );
};

export default Events;
