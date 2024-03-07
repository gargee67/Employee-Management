import React, {useEffect, useState } from "react";
import { Navbar } from "../../navbar/navbar";
import { Sidebar } from "../slide";
import "./salaryadmin.css";
import axios from "axios";
import { Modal } from "./modal";


export const SalaryAdmin=()=>{
    const [user4, setuser4]=useState([]);
    const [user11,setuser11]=useState([]);
    const [user6, setuser6]=useState([]);
    const [showmodal, setshowmodal]=useState(0);
    useEffect(()=>{
        axios.get(`http://localhost:8000/register`)
        .then(user11=>setuser11(user11.data))
        .catch(err=>console.log(err));
    },[]);
    const sub=(event)=>{
        const valuee=document.getElementById("mySearch").value;
        console.log(valuee);
        axios.get(`http://localhost:8000/register/${valuee}`)
        .then(user4=>{
            setuser4(user4.data);
            console.log("helooooo",user4.data[0].department)
          })
          .catch(err=>console.log(err))
    }
    
    const oncon=(userid)=>{
        //setshowmodal(1);
        console.log("gargee",userid);
        axios.get(`http://localhost:8000/working/${userid}`)
        .then(sum=>{
            setuser6(()=>{
                return sum.data
            });
            //console.log("byyy",user4.data..department);
            setshowmodal(1);
          })
          .catch(err=>console.log(err))
    }
    
    return(
        <>
        <Navbar/>
            
            <Sidebar/>
            <div className="control">
            <div class="search-container">
        <input type="text" class="search-input" id="mySearch" placeholder="Search..."/>
        <button class="search-button" onClick={sub}>
            Search
        </button>
    </div>
    
            </div>
{ showmodal===0?
            <table id="customer89">
        <tr>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Email</th>
        <th>Employee_id</th>
        <th>Edit_Salary_Status</th>
        </tr>
        {user4.length===0?
           user11.map(use=>{
            return(
                <tr>
                    <td>{use.fname}</td>
                    <td>{use.lname}</td>
                    <td>{use.email}</td>
                    <td>{use.id}</td>
                    <td><div className="rah1"><button onClick={()=>oncon(use.id)}>Edit Salary</button></div></td>
                </tr>
            )
           }):null}
           {user4.length===1?
           user4.map(userr=>{
            return(
                <tr>
                    <td>{userr.fname}</td>
                    <td>{userr.lname}</td>
                    <td>{userr.email}</td>
                    <td>{userr.id}</td>
                    <td><div className="rah1"><button onClick={()=>oncon(userr.id)}>Edit Salary</button></div></td>
                </tr>
            )
           }):null}
       

</table>

:null}
{showmodal===1?
<div>
    {user4.length===1?
        <Modal data={user6} onClose={()=>setshowmodal(0)} department={user4[0].department} id={user4[0].id}/>
    :null}
    {user4.length===0?
        <Modal data={user6} onClose={()=>setshowmodal(0)} department={user11[0].department} id={user11[0].id}/>
    :null}
    </div>
 :null}

        
    
            
        </>
    )
}