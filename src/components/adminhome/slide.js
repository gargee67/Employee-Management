//import React, { useState } from "react";
import "./silde.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
//import Logo from "../imgs/logo.png";
//import { UilSignOutAlt } from "@iconscout/react-unicons";
//import { SidebarData } from "../Data/Data";
//import { UilBars } from "@iconscout/react-unicons";
//import { motion } from "framer-motion";

export const Sidebar = () => {
  
  const history= useHistory();
  return(<>
  <div id="mySidenav" className="sidenav">
        <p className="logo">TEXSA <span className="menu">☰</span></p>
        <div className="button" onClick={()=> history.push("/register")}>Log out</div>
        <p className="logo1"> <span class="menu1">☰</span></p>
        <p  className="icon-a"><i className="fa fa-dashboard icons"></i><NavLink to="/dashbord" id="navfat">Dashboard</NavLink></p>
        <p className="icon-a"><i className="fa fa-user icons"></i><NavLink to= "/empdetails" id="navfat">Employee Details</NavLink></p>
        <p className="icon-a"><i className="fa fa-list icons"></i><NavLink to= "/salaryadmin" id="navfat">Salary</NavLink></p>
        <p className="icon-a"><i className="fa fa-male icons"></i><NavLink to= "/projectadmin" id="navfat">Project</NavLink></p>
        <p className="icon-a"><i className="fa fa-paypal icons"></i><NavLink to= "/adminleave" id="navfat">Leave</NavLink></p>
        
      
      
      </div>
  </>)
};
