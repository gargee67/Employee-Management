import React, { useState } from "react";
import { Navbar } from "../../navbar/navbar";
import "./aproject.css";
import { Sidebar } from "../slide";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Adminproject=()=>{
    const[oldproject, newproject]=useState({
        proname:"",
        procode:"",
        asiemp:"",
        prodescription:"",
    })
    const[user9,setuser9]=useState([]);
    const[view, setview]=useState(0);
    const sub1=(event)=>{
        const procode=document.getElementById("mySearch1").value;
        console.log(procode);
        axios.get(`http://localhost:8000/projectadmin/${procode}`)
        .then(user9=>{
            setuser9(user9.data);
            console.log("helooooo",user9.data)
            setview(1);
          })
          .catch(err=>console.log(err))
    }
    
    const kallo= async(e)=>{
        e.preventDefault();
        let arr = oldproject.asiemp.split(' ');
        console.log(arr);
        console.log("ggu",oldproject);

        const fromdata= new FormData();
        fromdata.append('proname', oldproject.proname);
        fromdata.append('procode',oldproject.procode);
        fromdata.append('prodescription',oldproject.prodescription);
        fromdata.append('empiddetails', arr);

        if(oldproject.proname && oldproject.procode && oldproject.prodescription && oldproject.asiemp)
        {
            await axios.post("http://localhost:8000/projectadmin",fromdata)
            .then(res=> {
                console.log(res)
                 newproject({
                    proname:"",
                    procode:"",
                    asiemp:"",
                    prodescription:"",
                })
            })
            .catch(err=>console.log(err));
        }else{
           alert("please fill the input");
        }
        
    }
    const inputchange=(event)=>{
        const value= event.target.value;
        const name= event.target.name;
        console.log(value);
        console.log(name);
        newproject((prevalue)=>{
            return{
                ...prevalue,
                [name]: value,
            }
        
        })
    }
    const see=()=>{
        setview(0);
    }
    
    return(
        <>
        <Navbar/>
        <Sidebar/>
        <div className="bal1">
        
        {view===0?
        <div class="container67">
    <form onSubmit={kallo} method="POST" id="from">
        <label for="fname">Project Name</label>
        <input type="text" id="fname" name="proname" placeholder="Your project name.." onChange={inputchange} value={oldproject.proname} required/>

    <label for="lname">Project Code</label>
    <input type="text" id="lname" name="procode" placeholder="Your project code.." onChange={inputchange} value={oldproject.procode} required/>

    <label for="country">Assignd EmployeeIDs</label>
    <input type="text" id="lname" name="asiemp" placeholder="1st id  2nd id..." onChange={inputchange} value={oldproject.asiemp} required/>

    <label for="subject">Project Description</label>
    <textarea id="subject" name="prodescription" placeholder="Write something.." style={{height:"200px"}} onChange={inputchange} value={oldproject.prodescription} required></textarea>

<button id="submitt">Submit</button>

    
  </form>
  </div>
:null}
{
    view===1?
    <div className="connn">
    <table id="customer00">
    <tr>
        <th>Project_Code</th>
        <th>Project_name</th>
        <th>Assignd_EmployeeIDs</th>
        <th>Action</th>
        </tr>
        {
            user9.map(use=>{
                return(
                    <tr>
                    <td>{use.procode}</td>
                    <td>{use.proname}</td>
                    <td>{use.empiddetails + " "} 
                   </td>
                    <td><Link to={`/update/${use.procode}`} ><button  className="buttonn" >Edit</button></Link> </td>
                    </tr>
                )
            })
        }
        </table>
    <button onClick={see}>See Privious</button>
    </div>
:null}
  

<div imgrt>
<img src={require("../../images/hk.png")} alt="Avatar" style={{width:"300px", height:"300px"}}/>
<div class="search-container1">
        <input type="text" class="search-input1" id="mySearch1" placeholder="Search By ProjectCode..."/>
        <button id="submit4" onClick={sub1}>
            Search
        </button>
    </div>
</div>
        </div>
        </>
    )
}