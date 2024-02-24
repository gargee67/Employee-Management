import React, { useEffect, useState } from "react";
import "./update.css";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";


export const UpdateAdmin=()=>{
    const {procode}= useParams();
   
    
    const[oldproject1, newproject1]=useState({
        proname:"",
        procode:procode,
        asiemp:"",
        prodescription:"",
    })
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/projectadmin/${procode}`)
        .then((oldproject1)=>{
           newproject1({...oldproject1,  proname:oldproject1.data[0].proname,  asiemp:oldproject1.data[0].empiddetails.join(","),   prodescription:oldproject1.data[0].prodescription})
           console.log("klkl",oldproject1.data)
        })
        .catch(err=>console.log(err));
    },[procode]);

    const inputchange=(event)=>{
        const value= event.target.value;
        const name= event.target.name;
        console.log(value);
        console.log(name);
        newproject1((prevalue)=>{
            return{
                ...prevalue,
                [name]: value,
            }
        
        })
    }
    const kallo= async(e)=>{
        e.preventDefault();
        let arr = oldproject1.asiemp.split(',');
        console.log("bib",arr);
        console.log("ggu",oldproject1.asiemp);

        const fromdata= new FormData();
        fromdata.append('proname', oldproject1.proname);
        fromdata.append('procode',procode);
        fromdata.append('prodescription',oldproject1.prodescription);
        fromdata.append('empiddetails', arr);
        console.log(procode);
        
        
            await axios.patch(`http://localhost:8000/projectadmin/${procode}`,fromdata)
            .then(res=> {
                console.log(res)
                 newproject1({
                    proname:"",
                    procode:"",
                    asiemp:"",
                    prodescription:"",
                })
            })
            .catch(err=>console.log(err));
        
           
        
        
    }
    return(
        <>
        <div className="fixed">
            <div className="modal-content">
            <Link to="/projectadmin"><span class="close">&times;</span></Link>
            <form onSubmit={kallo} method="POST" id="from">
                <h1>Update Project from</h1>
        <label for="fname">Project Name</label>
        <input type="text" id="fname" name="proname" placeholder="Your name.."  value={oldproject1.proname}  onChange={inputchange} required/>

    <label for="lname">Project Code</label>
    <input type="text" id="lname" name="procode" placeholder="Your last name.."  value={oldproject1.procode}  onChange={inputchange} required/>

    <label for="country">Assignd EmployeeIDs</label>
    <input type="text" id="lname" name="asiemp" placeholder="1st id  2nd id..."  value={oldproject1.asiemp}  onChange={inputchange} required/>

    <label for="subject">Project Description</label>
    <textarea id="subject" name="prodescription" placeholder="Write something.." style={{height:"200px"}} value={oldproject1.prodescription} onChange={inputchange} required></textarea>

<button id="submitt">Submit</button>

    
  </form>  
            </div>
        </div>
        </>
    )
}