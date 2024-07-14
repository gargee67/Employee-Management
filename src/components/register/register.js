import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
//import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

 export const Register=()=>{

    const history= useHistory();
    const [fullName, setFullName]= useState({
        fname:"",
        lname:"",
        email:"",
        dob:"",
        passs:"",
        pswrepeat:"",
        gender:"",
        id:"",
        department:"",
        file:null
        
      });
      
      
      
      const inputEvent=(event)=>{
        console.log(event.target.value);
        console.log(event.target.name);
        //setFullName(event.target.value);
    const value1=  event.target.type==='file' ?   event.target.files[0] : event.target.value;

    const name=event.target.name;
        setFullName((prevalue)=>{
            return{
                ...prevalue,
                [name]: value1,
            }
        
        })
    }
     const onSubmits= (event)=>{
         event.preventDefault();
         
      alert(" Register succesfull and login now ");

        }
    const handeldata= async(event)=>{
        console.log("hihihi");
        console.log(fullName.file);
       
        const fromdata= new FormData();
       
       
        
        fromdata.append('fname', fullName.fname);
        fromdata.append('lname', fullName.lname);
        fromdata.append('email', fullName.email);
        fromdata.append('dob', fullName.dob);
        fromdata.append('passs', fullName.passs);
        fromdata.append('ppswrepeat', fullName.pswrepeat);
        fromdata.append('gender',fullName.gender);
        fromdata.append('id',fullName.id);
        fromdata.append('department',fullName.department);
        fromdata.append('file', fullName.file);

        console.log(...fromdata);
        //const { fname,lname, email,dob,passs,pswrepeat,gender,id ,file } = fullName
        //fromdata.append('data',fullName);
        //console.log(JSON.stringify(fromdata));
        console.log("fullname123" ,fullName);
         if(fullName.fname && fullName.lname && fullName.email && fullName.dob && (fullName.passs === fullName.pswrepeat) && fullName.gender && fullName.id )
         {
          await axios.post("http://localhost:8000/register" ,/*{fname,lname,email,dob,passs,pswrepeat,gender,id , file}*/fromdata)
            //alert("posted");
            .then(res=> {
                console.log(res)
            })
            .catch(err=>console.log(err));
         }else{
            alert("invaild input");
         }
    }
    return(
        <>
            <div className="register">
            <form className="container4" onSubmit={onSubmits} method="POST" id="from">
        <h1 className=" text-capitalize bg-danger-subtle">Registration Form</h1>
        <div className="input fnm">
            <i className="fa-solid fa-user"></i> <input type="text" className="fname "  placeholder="FirstName" name="fname" onChange={inputEvent} value={fullName.fname}/>
            <i className="fa-solid fa-user"></i>  <input type="text" className="lname " placeholder="LastName" name="lname" onChange={inputEvent} value={fullName.lname}/>
        </div>
        <div className="input">
            <i className="fa-solid fa-envelope"></i> <input type="text" className="inpt" placeholder="Email" name="email" onChange={inputEvent} value={fullName.email}/>
        </div>
        <div className="input">
            <i className="fa-solid fa-calendar-days"></i> <input type="text" className="inpt" placeholder="DOB" name="dob" onChange={inputEvent} value={fullName.dob}/>
        </div>
        
        <div class="input">
            <i className="fa-solid fa-lock"></i>  <input type="text" className="inpt" placeholder="Password" name="passs" onChange={inputEvent} value={fullName.passs}/>
        </div>
        <div class="input">
            <i className="fa-solid fa-lock"></i>  <input type="text" className="inpt" placeholder="Confirm Password" name="pswrepeat" onChange={inputEvent} value={fullName.pswrepeat}/>
        </div>
        <div class="input gender">
            <i className="fa-solid fa-person"></i> <input type="radio" name="gender" value="male"
             checked={fullName === 'male'}
             onChange={inputEvent} /> Male
            
            <input type="radio" name="gender" value="female"
             checked={fullName === 'female'}
             onChange={inputEvent} /> Female
        </div>
        <div class="input">
            <i className="fa-regular fa-id-badge"></i> <input type="text" className="inpt" placeholder="Id-no" name="id" onChange={inputEvent} value={fullName.id}/>
        </div>
        <div class="input">
            <i className="fa-regular fa-id-badge"></i> <input type="text" className="inpt" placeholder="Department-no" name="department" onChange={inputEvent} value={fullName.department}/>
        </div>
        <div class="input">
            <p className=" bg-success-subtle">Upload your image here</p>
            <i className="fa-regular fa-id-badge"></i> <input type="file" className="inpt"  onChange={inputEvent}   name="file" />
        </div>
        <button className=" btn-primary" onClick={handeldata}>Register</button>
        <div>or</div>
       <button onClick={()=> history.push("/login")}>Log in</button>
    </form>
    </div>
            </>
    )
}