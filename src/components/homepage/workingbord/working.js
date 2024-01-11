import React from "react";
import { Navbar } from "../../navbar/navbar";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./working.css";

export const Working=()=>{
    const history=useHistory();
    function calculateHours() {
        const startTime = document.getElementById('startTime').value;
        const endTime = document.getElementById('endTime').value;
        const breakTime = document.getElementById('breaktime').value;
    
        let [startHour, startMinute] = startTime.split(':');
        let [endHour, endMinute] = endTime.split(':');
        let [breakHour, breakMinute] = breakTime.split(':');
        const starttimehour=startHour*60*60+startMinute*60;
         const endtimehour=endHour*60*60+endMinute*60;
          const breaktimehour=breakHour*60*60+breakMinute*60;
          const totalhours=endtimehour-(starttimehour-breaktimehour);
          const final=Math.round((totalhours/3600)*10)/10;
          //var rounded = Math.round(number * 10) / 10
        document.getElementById('decimalHours').textContent=final;
       
        
    
      
    }
    return(<>
    <Navbar/>
    <div className="big_div">
    <div id="mySidenav" className="sidenav">
        <p className="logo">TEXSA <span className="menu">☰</span></p>
        <div className="button" onClick={()=> history.push("/register")}>Log out</div>
        <p className="logo1"> <span class="menu1">☰</span></p>
        
        <p className="icon-a"><i className="fa fa-dashboard icons"></i><NavLink to= "/">Dashbord</NavLink></p>
        <p className="icon-a"><i className="fa fa-user icons"></i><NavLink to= "/timesheet">Time Sheet</NavLink> </p>
        <p className="icon-a"><i className="fa fa-list icons"></i><NavLink to= "/working">Working Hour</NavLink></p>
        <p className="icon-a"><i className="fa fa-male icons"></i><NavLink to= "/leave">Leave</NavLink></p>
        <p className="icon-a"><i className="fa fa-paypal icons"></i>Salary</p>
        <p className="icon-a"><i className="fa fa-list-alt icons"></i>Projects</p>
        <p className="icon-a"><i className="fa fa-bell icons"></i>   Notices</p>
        
      
      
      </div>
      <div class="container1">
        <h1>Clear Hours Calculator</h1>
        <div class="form-container">
            <label for="startTime">Start Time</label>
            <input type="time" id="startTime" name="startTime"/>

            <label for="endTime">End Time</label>
            <input type="time" id="endTime" name="endTime"/>
                        
            <label for="break">Take Break</label>
            <input type="time" id="breaktime" name="breaktime"/>
                        


            
        </div>
        
        <button onClick={calculateHours}>Calculate</button>
        <div class="result-container">
          
            <h2>In Decimal Hours:</h2>
            <p id="decimalHours"></p>
          
        </div>
    </div>
      </div>
    </>)
}