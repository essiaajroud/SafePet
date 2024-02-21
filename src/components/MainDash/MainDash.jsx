import React from "react";
import Overview from "../Overview/overview";
import Calendar from "../Calendar/calendar";
import Patients from "../Patients/patients";
import { UilMoon } from '@iconscout/react-unicons';
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <div className="background">
        <div className="barmenu">
              <div className="username">
                <h4>User Name</h4>
                <div className="userimage"></div>
              </div>     
        </div>

      </div>
    </div>
  );
  
};

export default MainDash;
