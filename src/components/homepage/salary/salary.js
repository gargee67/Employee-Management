import React, { useEffect, useState } from "react";
import { Navbar } from "../../navbar/navbar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { NavLink } from "react-router-dom";
import "./salary.css"
import axios from "axios";

export const Salary=({user})=>{
    const history= useHistory();
    const[user8, newuser8]=useState([]);
    const[user9, newuser9]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:8000/salary/${user.id}`)
        .then(user8=>newuser8(user8.data))
        .catch(err=>console.log(err));
    },[user.id]);
    const click1=()=>{
        const month=document.getElementById("mySearch").value;
        console.log(month);
        console.log(user.id);
        axios.get(`http://localhost:8000/salary/${user.id}/${month}`)
        .then(user9=>{
            newuser9(user9.data)
            console.log("he",user9.data)
        })
        .catch(err=>console.log(err));
        
    }
    return(
        <>
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
        <div className="conta">
            <h1>Your Salary Report</h1>
        </div>
        </div>
        <table id="customertt">
        <tr>
        <th>Employee_id</th>
        <th>Total_Hour</th>
        <th>OverTime</th>
        <th>Salary_Submitted_Date</th>
        <th>Salary</th>
        <th>Month</th>
        </tr>
        {user9.length!==1?
            user8.map(user1=>{
                return(
                    <tr>
                        <td>{user1.id}</td>
                        <td>{user1.totalwork}</td>
                        <td>{user1.overtime}</td>
                        <td>{user1.date}</td>
                        <td>{user1.totalSalary}</td>
                        <td>{user1.month}</td>
                    </tr>
                )
            })
        :null}
        {user9.length===1?
            user9.map(user1=>{
                return(
                    <tr>
                        <td>{user1.id}</td>
                        <td>{user1.totalwork}</td>
                        <td>{user1.overtime}</td>
                        <td>{user1.date}</td>
                        <td>{user1.totalSalary}</td>
                        <td>{user1.month}</td>
                    </tr>
                )
            })
        :null}

 
 
</table>
<button className="jo"> </button>
<div className="control1">
            <div class="search-container1">
        <input type="text" class="search-input" id="mySearch" placeholder="Search By Month Name..."/>
        <button class="search-button1" onClick={()=>click1()}>
            Search
        </button>
    </div>
    
            </div>
      
     
        </>
    )
}