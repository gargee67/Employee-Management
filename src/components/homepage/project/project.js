import React, { useEffect, useState } from "react";
import { Navbar } from "../../navbar/navbar";
import { NavLink } from "react-router-dom";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./project.css";
import axios from "axios";

export const Project=({user})=>{
    const [user10,setuser10]=useState([]);
    const [us,setus]=useState([]);
    useEffect(()=>{
        console.log("klklkl",user.id);
        axios.get(`http://localhost:8000/projectadmin/id/${user.id}`)
        .then(user10=>{
          setuser10(user10.data)
        })
        .catch(err=>console.log(err));
    },[user.id]);
    const history=useHistory();
    const hallu=(event)=>{
        axios.get(`http://localhost:8000/currentproject/${user.id}`)
        .then((us)=>{
           
          setus(us.data[0])
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
        <div className="bal">
        <img src={require("../../images/ok.png")} alt="Avatar" style={{width:"200px", height:"200px"}} />
        <div className="current">
        <h1>Previous Projects</h1>
        <table id="customer00">
           
        <tr>
        <th>Project_Code</th>
        <th>Project_name</th>
        <th>Assignd_EmployeeIDs</th>
        <th><button onClick={hallu}>See_Status</button></th>
        
        </tr>
           {
            user10.map(use=>{
                return(
                    <tr>
                    <td>{use.procode}</td>
                    <td>{use.proname}</td>
                    <td>{use.empiddetails + " "} 

                   </td>
                  {
                        us.procode1===use.procode?
                        <td>
                            Current
                        </td>
                  :null}
                  {
                    us.procode1!==use.procode?
                    <td>
                        Pending
                    </td>
                  :null}
                  
                   
                   </tr>
                )
            })
           }
          
           </table>
           <Link to={`/currentproject`} ><button>Add Current Project</button></Link> 
            </div>
        </div>
        </div>
    </>)
}