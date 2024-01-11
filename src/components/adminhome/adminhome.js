import React from "react";
import "./adminhome.css";
import { Navbar } from "../navbar/navbar";
import { Sidebar } from "./slide";
import {Admindash} from "./admindash/admindash";
 export const Adminhome=({ user})=>{
    
    
    //var obj=JSON.stringify(data);
    //var string = "" + obj;
    //var array= JSON.parse(string);
    return(
        <>
        <div className="homepage1">
            <Navbar/>
            
            <Sidebar/>
        
        <Admindash/>
        </div>
        </>
    )
}