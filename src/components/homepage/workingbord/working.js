import React, {useEffect, useState } from "react";
import { Navbar } from "../../navbar/navbar";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./working.css";
import axios from "axios";

export const Working=({user})=>{
    const history=useHistory();
   
    
    useEffect(()=>{
      axios.get(`http://localhost:8000/working/${user.id}`)
      .then(sum=>{
        newuser3(sum.data);
      })
      .catch(err=>console.log(err));
  },[user.id]);

   
  const[view2, setview2]=useState(1);
  const[hour1, sethour]=useState({
    id:user.id,
    email:user.email,
    hour:"",
  });

  const[user3,newuser3]= useState(0);

    
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
       sethour((pre)=>{
        return{
          ...pre,
          hour:final,
        }

       })

       console.log(hour1);
        
    
      
    }
    const ongo=(event)=>{
      console.log(hour1);
      alert("your Working time is submitted");
      axios.post("http://localhost:8000/working",hour1)
      .then(res=>{
        console.log(res);
        setview2(1);
      
      })
      .catch(err=>console.log(err));
    }
    return(<>
    <Navbar/>
    <div className="big_div">
    <div id="mySidenav" className="sidenav">
        <p className="logo">TEXSA <span className="menu">☰</span></p>
        <div className="button" onClick={()=> history.push("/register")}>Log out</div>
        <p className="logo1"> <span class="menu1">☰</span></p>
        
        <p className="icon-a"><i className="fa fa-dashboard icons"></i><NavLink to= "/" id="navfat">Dashbord</NavLink></p>
        <p className="icon-a"><i className="fa fa-user icons"></i><NavLink to= "/timesheet" id="navfat">Time Sheet</NavLink> </p>
        <p className="icon-a"><i className="fa fa-list icons"></i><NavLink to= "/working" id="navfat">Working Hour</NavLink></p>
        <p className="icon-a"><i className="fa fa-male icons"></i><NavLink to= "/leave" id="navfat">Leave</NavLink></p>
        <p className="icon-a"><i className="fa fa-paypal icons"></i><NavLink to= "/salary" id="navfat">Salary</NavLink></p>
        <p className="icon-a"><i className="fa fa-list-alt icons"></i><NavLink to= "/project" id="navfat">Project</NavLink></p>
        <p className="icon-a"><i className="fa fa-bell icons"></i>   Notices</p>
        
      
      
      </div>
      {
        view2===2?
      <div class="container1">
        <h1>WorkingHour Calculate</h1>
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
          
            <h2>Today Working Hour:</h2>
            <p id="decimalHours"></p>
          <div className="button12" onClick={ongo}>Submit</div>
        </div>
       
    </div>
:null}
{
  view2===1?
  <div className="red1">
   <div className="spell"> <h1>Working Hour Report</h1></div>
    <div className="red">
  <div className="imggg">
  <img src={require("../../images/logooffice12.jpg")} alt="Avatar" style={{width:"200px", height:"200px"}}/>
  </div>
  <div className="wrrr">
    <h1>{user3}hr</h1>
  </div>
  <div className="yy"><h2>Total Hour Work in This Month </h2></div>
  </div>
  <div className="button12" onClick={()=>setview2(2)}>Hour Submit</div>
  </div>
  
:null}
    
      </div>
    </>)
}