import React, { useEffect, useState } from "react";

//import { Navbar } from "../../navbar/navbar";
//import { NavLink } from "react-router-dom";
//import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./adminedit.css";
import { Sidebar } from "../slide";




export const ADempEdit=({user})=>{
    
    const[emp, setemp]=useState({
        fname1:"",
        lname1:"",
        email1:"",
        dob1:"",
    });
    const {id}= useParams();
    ///const {fname1, lname1 ,email1, dob1}=emp;
    /*const[old, setold]=useState({
        fname1:"",
        lname1:"",
        email1:"",
        dob1:"",
    });*/
    useEffect(()=>{
       const result= axios.get(`http://localhost:8000/register/${id}`)
        .then((emp)=>{
           setemp({...emp,  fname1:emp.data[0].fname, lname1:emp.data[0].lname , email1:emp.data[0].email, dob1:emp.data[0].dob })
           console.log("klkl",emp.data)
        })
        .catch(err=>console.log(err));
       
    },[id]);
    const jal=async(e)=>{
        e.preventDefault();
        
       
        console.log(id);
        console.log(emp);
        await axios.patch(`http://localhost:8000/register/${id}`,emp)
            .then(res=> {
                console.log(res)
                //sssssssetemp((emp)=>emp.data);
                alert("your Change is updated");
            })
            .catch(err=>console.log(err))
    }
    const edit1=(e)=>{
      /* const name=e.target.name;
        const value=e.target.value;
        console.log(name);
        console.log(value);
    setemp((pre)=>{
        return{
            ...emp,
            [name]:value
        }
    })*/
    setemp({ ...emp, [e.target.name]: e.target.value });
}
    return(
        <>
        
           <Sidebar/>
           <div className="fixed">
          
            <div className="modal-content">
            <Link to="/empdetails"><span class="close">&times;</span></Link>
            <div className="count">
                   
                   <h1>Edit Employee</h1>
                    <label for="name1" className="t">First name</label>
                    <input type="text" id="chargeonhour" name="fname1" onChange={edit1} value={emp.fname1}/><br/>

                    <label for="entry-date 1" className="t">Last name</label>
                    <input type="text" id="chargeonhour" name="lname1" onChange={edit1} value={emp.lname1}/><br/>
                    
                    <label for="entry-date 1" className="t">Email</label>
                    <input type="email" id="empe" name="email1" onChange={edit1} value={emp.email1}/><br/>
                
                    <label for="entry-date 1" className="t">Date Of Birth</label>
                    <input type="date" id="dob1" name="dob1" onChange={edit1} value={emp.dob1}/><br/>
                    <div className="gh">
                    <button onClick={jal}>Submit</button>
                    </div>

                    <p id="countt"></p>
                </div>
            </div>
        </div>
        </>
    )
}