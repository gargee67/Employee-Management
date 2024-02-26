import React, {useEffect, useState } from "react";
import { Navbar } from "../../navbar/navbar";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./working.css";
import axios from "axios";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const Working=({user})=>{
    const history=useHistory();
    const location= useLocation();
   console.log("jkjkjkjkjkjkjkj",location.state);
  
   const[hour1, sethour]=useState({
    id:user.id,
    email:user.email,
    hour: location.state===null? 0:location.state.data,
  });
  const[user3,newuser3]= useState(0);
   useEffect(()=>{
    
      axios.post("http://localhost:8000/working",hour1)
      .then(res=>{
        console.log(res);
      
      })
      .catch(err=>console.log(err));
   })



    useEffect(()=>{
      axios.get(`http://localhost:8000/working/${user.id}`)
      .then(sum=>{
        console.log("hhohoi",sum.data);
        newuser3(sum.data);
      })
      .catch(err=>console.log(err));
  },[user.id]);

   
  //const[view2, setview2]=useState(1);
  
  

    
    /*function calculateHours() {
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
        
    
      
    }*/
    
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
  
  </div>
  

    
      </div>
    </>)
}