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
        <p  className="icon-a"><i className="fa fa-dashboard icons"></i>Dashboard</p>
        <p className="icon-a"><i className="fa fa-user icons"></i> Time Sheet</p>
        <p className="icon-a"><i className="fa fa-list icons"></i><NavLink to= "/salaryadmin">Salary</NavLink></p>
        <p className="icon-a"><i className="fa fa-male icons"></i><NavLink to= "/projectadmin">Project</NavLink></p>
        <p className="icon-a"><i className="fa fa-paypal icons"></i>Salardccd</p>
        <p className="icon-a"><i className="fa fa-list-alt icons"></i>Projects</p>
        <p className="icon-a"><i className="fa fa-bell icons"></i>   Notices</p>
        
      
      
      </div>
  </>)
};
