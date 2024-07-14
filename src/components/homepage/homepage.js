import React, { useEffect, useState } from "react";
import "./homepage.css";
import { Navbar } from "../navbar/navbar";
import { Dashbord } from "./dashbord/dashbord";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom"


 export const Homepage=({ user })=>{
  console.log("user"+ JSON.stringify(user));
    const history= useHistory();
    

    
    const hello=()=>{
      return(
        
        <input type="file"  className="filetype" />
        
      )
    }
    //var obj=JSON.stringify(data).toString();
    //var array= JSON.parse(obj);
    return(
        

        <div className="homepage">
          
            <Navbar/>
    <div className="grid-container1">
    <div className="grid-item1">
      <div id="mySidenav" className="sidenav">
        <p className="logo">TEXSA <span className="menu">☰</span></p>
        <div className="button" onClick={()=> history.push("/register")}>Log out</div>
        <p className="logo1"> <span class="menu1">☰</span></p>
        
        <p className="icon-a"><i className="fa fa-dashboard icons"></i><NavLink to= "/">Dashbord</NavLink></p>
        <p className="icon-a"><i className="fa fa-user icons"></i><NavLink to= "/timesheet" id="navfat">Time Sheet</NavLink> </p>
        <p className="icon-a"><i className="fa fa-list icons"></i><NavLink to= "/working" id="navfat">Working Hour</NavLink></p>
        <p className="icon-a"><i className="fa fa-male icons"></i><NavLink to= "/leave" id="navfat">Leave</NavLink></p>
        <p className="icon-a"><i className="fa fa-paypal icons"></i><NavLink to= "/salary" id="navfat">Salary</NavLink></p>
        <p className="icon-a"><i className="fa fa-list-alt icons"></i><NavLink to= "/project" id="navfat">Project</NavLink></p>
        <p className="icon-a"><i className="fa fa-bell icons"></i>   Notices</p>
        
      
      
      </div>
    </div>
    <div className="grid-item2">
      <div className="item2inner">
        <from onSubmit={()=>{}}>
          <label>
        <img src={require("C:/Employee/Employee-Management-backend/public/images/"+ user.file)} alt="Avatar" style={{width:"200px", height:"200px"}} onClick={hello}/>
        </label>
        </from>
      </div>
      <div className="item2inner1" id="fat">
        <div className="tt">
          <i className="fa fa-dashboard icons"></i>
          <h3>{user.fname} {user.lname}</h3>
        </div>
        
        <div className="tt">
          <i className="fa-solid fa-phone"></i>
          <h3>{user.id}</h3>
        </div>
        <div className="tt">
          <i className="fa-solid fa-briefcase"></i>
          <h3>{user.email}</h3>
        </div>
        
        
      </div>
    </div>
    
    <Dashbord/>
   
   
  </div>
  
    
        </div>
   
    )
}