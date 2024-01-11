import React, {useState} from "react"
import "./login.css"
import axios from "axios";
//import axios from "axios"
//import { useHistory } from "react-router-dom"
import { useHistory } from "react-router-dom";

const Login = ({ setLoginUser}) => {

    const history= useHistory();
    const [fullName, setFullName]= useState({
        email:"",
        passs:"",
      });
      const inputEvent=(event)=>{
        //console.log(event.target.value);
        //console.log(event.target.name);
        //setFullName(event.target.value);
    const value1= event.target.value;
    const name=event.target.name;
        setFullName((prevalue)=>{
    
            return{
                ...prevalue,
                [name]: value1,
            }
        })
    }
   const onSubmits=async (event)=>{
    event.preventDefault();
    //alert("login ongoing");
    const { email, passs } = fullName
    if(email && passs)
    {
        await axios.post("http://localhost:8000/login", {email,passs})
            .then(res=>{
                //console.log(res.data.check.id);
                alert(res.data.message)
                setLoginUser(res.data.check);
                //console.log(res.data.check);
                //if(res.data.check)
                //var obj=JSON.stringify(log);
                //console.log(obj);
                //var array= JSON.parse(obj);
                if(res.data.check.id[0]==='A' && res.data.check.id[1]==='D')
                {
                    
                    history.push({
                        pathname:"/admin",
                        
                    });
                   
                }else{
                history.push({
                    pathname:"/",
                   
                });
            }
            })
            .catch(err=>console.log(err));
    }
   }
   

    return (
        <form method="POST">
        <div className="login">
           
            
            <h1>Login</h1>
            <input type="text" name="email" value={fullName.email} onChange={inputEvent} placeholder="Enter your Email"></input>
            <input type="password" name="passs" value={fullName.passs} onChange={inputEvent}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={onSubmits}>Login</div>
            <div>or</div>
            <div className="button" onClick={()=> history.push("/register")}>Register</div>
            
        </div>
        </form>
    )
}

export default Login