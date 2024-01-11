import React, { useState } from "react";
import "./silde.css";
//import Logo from "../imgs/logo.png";
//import { UilSignOutAlt } from "@iconscout/react-unicons";
//import { SidebarData } from "../Data/Data";
//import { UilBars } from "@iconscout/react-unicons";
//import { motion } from "framer-motion";

export const Sidebar = () => {
  return(<>
  <div id="mySidenav" className="sidenav">
        <p className="logo">TEXSA <span className="menu">☰</span></p>

        <p className="logo1"> <span class="menu1">☰</span></p>
        <p  className="icon-a"><i className="fa fa-dashboard icons"></i>Dashboard</p>
        <p className="icon-a"><i className="fa fa-user icons"></i> Time Sheet</p>
        <p className="icon-a"><i className="fa fa-list icons"></i>Working Hours</p>
        <p className="icon-a"><i className="fa fa-male icons"></i>Leave</p>
        <p className="icon-a"><i className="fa fa-paypal icons"></i>Salary</p>
        <p className="icon-a"><i className="fa fa-list-alt icons"></i>Projects</p>
        <p className="icon-a"><i className="fa fa-bell icons"></i>   Notices</p>
        
      
      
      </div>
  </>)
};
