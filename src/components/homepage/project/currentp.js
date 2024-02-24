import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { Navbar } from "../../navbar/navbar";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
export const CurrentProject=({user})=>{
    const[project, setproject]=useState({
        proname:"",
        procode:"",
        id:user.id,
    })
    useEffect(()=>{
        axios.get(`http://localhost:8000/currentproject/${user.id}`)
        .then((project)=>{
           setproject({...project,  proname:project.data[0].proname1, procode:project.data[0].procode1})
           console.log("klkl",project.data)
        })
        .catch(err=>console.log(err));
    },[user.id]);
    const inputchange=(event)=>{
        const value=event.target.value;
        const name= event.target.name;
        setproject((prevalue)=>{
            return{
                ...prevalue,
                [name]:value,
            }
        })
    }
    const history=useHistory();
    const kallo=(e)=>{
        e.preventDefault();
        console.log("jkjk",project);

        axios.post(`http://localhost:8000/currentproject/${user.id}`,project)
        .then(res=>{
            console.log(res)
            setproject({
                proname:"",
                procode:"",
               
            })
        })
    }
    return(
        <>
        <div className="fixed">
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
      </div>
            <div className="modal-content">
                
           <Link to="/project"> <span class="close" >&times;</span></Link>
        <div className="gal">
        <form onSubmit={kallo} method="POST"  id="from">
        <label for="fname">Project Name</label>
        <input type="text" id="fname" name="proname" placeholder="Your project name.." onChange={inputchange} value={project.proname} required/>

    <label for="lname">Project Code</label>
    <input type="text" id="lname" name="procode" placeholder="Your project code.." onChange={inputchange} value={project.procode} required/>
<button id="submitt">Submit</button>
</form>
        </div>
        </div>
        </div>
        </>
    )
}