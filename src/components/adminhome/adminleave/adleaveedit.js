import React, { useEffect, useState } from "react";

import { Navbar } from "../../navbar/navbar";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../adminleave/adleaveedit.css";
import { Sidebar } from "../slide";
//import { Adminsidebar } from "../admindash/adminslidebar/adminslider";


export const ADleaveEdit=({user})=>{
    const[status, setstatus]=useState({
        cars:"",
    });
    const {id}= useParams();
    const jal=async(e)=>{
        e.preventDefault();
        
       
        console.log(id);
        console.log(status);
        await axios.patch(`http://localhost:8000/leave/${id}`,status)
            .then(res=> {
                console.log(res)
                
            })
            .catch(err=>console.log(err));
    }
    const inputc=(e)=>{
       const name=e.target.name;
        const value=e.target.value;
        console.log(name);
        console.log(value);
    setstatus((pre)=>{
        return{
            ...status,
            [name]:value
        }
    })
}
    return(
        <> 
        
           <Sidebar/>
        
           <div className="fixed">
          
            <div className="modal-content">
            <Link to="/adminleave"><span class="close">&times;</span></Link>
            <form onSubmit={jal} method="POST" id="from">
            <label for="cars">Choose a Option</label>
  <select name="cars" id="cars" onChange={inputc} value={status.cars}>
    <option value="approve">Select</option>
    <option value="cancel">Cancel</option>
    <option value="approve">Approve</option>
    
  </select>
  
  <input type="submit" value="Submit" />
    
  </form>  
            </div>
        </div>
        </>
    )
}