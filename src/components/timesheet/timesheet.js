import React, {useEffect, useState } from "react";
import { Navbar } from "../navbar/navbar";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./timesheet.css";
import axios from "axios";
export const Timesheet=({user})=>{
    const history= useHistory();
    const d = new Date();
    let text = d.toLocaleTimeString();
    const [old1,new1]=useState({
        date:"",
        time:"",
        etime:text,
        pcode:"",
        pname:"",
        hours:"",
        work:"",
        id:user.id,
    })
    const[user2,newuser2]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:8000/timesheet/${user.id}`)
        .then(user2=>newuser2(user2.data))
        .catch(err=>console.log(err));
    },[user.id]);
    const [view1, setview1]=useState(1);
    const changing=(event)=>{
        const val2= event.target.value;
        const name2= event.target.name;
        console.log(val2);
        console.log(name2);
        new1((pre)=>{
            return{
                ...pre,
                [name2]:val2,
            }
        })
    }
    const finish=(event)=>{
        event.preventDefault();
        alert("submit");
       
    }
    const submitted=(event)=>{
        axios.post("http://localhost:8000/timesheet",old1)
        .then(res=>{
            console.log(res)
            new1({
                date:"",
                time:"",
                etime:text,
                pcode:"",
                pname:"",
                hours:"",
                work:"",
                id:user.id,
            })
        })
       .catch(err=>console.log(err));
    }
    
    return (
        <>
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
      
       {view1===1? <form className="container" onSubmit={finish}>
    <div class="context">
        
        <div class="form-item">
            <label for="name">Name:</label>
            <h3>{user.fname}</h3>
        </div>
        <div class="form-item">
            <label for="employee-id">Employee ID:</label>
            <h3>{user.id}</h3>
        </div>
        <div class="form-item">
            <label for="entry-date">Entry Date:</label>
            <input type="date" id="entry-date" name="date" onChange={changing} value={old1.date}/>
        </div>
        <div class="form-item">
            <label for="task-date">Entry Time</label>
            <input type="time" id="task-date"  name="time" onChange={changing} value={old1.time} />
        </div>
        <div class="form-item">
            <label for="task-date">Exit Time</label>
            <input type="text" id="task-date"  value={text}/>
        </div>

        </div>
        <div class="context2">
        
        <div class="form-item">
            <label for="project-code">Project Code:</label>
            <input type="text" id="project-code"  name="pcode" onChange={changing} value={old1.pcode}/>
        </div>
        <div class="form-item">
            <label for="project-name">Project Name:</label>
            <input type="text" id="project-name"  name="pname" onChange={changing} value={old1.pname} />
        </div>
        <div class="form-item">
            <label for="hours-invested">Hours Invested:</label>
            <input type="number" id="hours-invested"  name="hours" onChange={changing} value={old1.hours}/>
        </div>
        <div class="form-item">
            <label for="description">Today Work:</label>
            <textarea id="description"  name="work" onChange={changing} value={old1.work}> </textarea>
        </div>
        <div className="button16">
        <button onClick={submitted}>Save</button>
        <button className="jo"> </button>
        <button onClick={()=>setview1(2)}>See Previous Sheet</button>
        </div>
        </div>
        </form>
    
   
    : null}
    {
        view1===2? <div>
            <table id="customers">
        <tr>
        <th>Date_Submitted</th>
        <th>Time_from</th>
        <th>Time_to</th>
        <th>Work Summary</th>
        </tr>
        {
            user2.map(users=>{
                return(
                    <tr>
                        <td>{users.date}</td>
                        <td>{users.time}</td>
                        <td>{users.etime}</td>
                        <td>{users.work}</td>
                    </tr>
                )
            })
        }

 
 
</table>
<button className="jo"> </button>
        <div className="raha"><button onClick={()=>setview1(1)}>See Previous Sheet</button></div>
        </div>:null
    }
    </div>
      
        </>
    )
}