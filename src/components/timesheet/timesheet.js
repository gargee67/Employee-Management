import React, {useEffect, useState } from "react";
import { Navbar } from "../navbar/navbar";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./timesheet.css";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
//import { Working } from "../homepage/workingbord/working";
//import { useNavigate } from 'react-router-dom';
export const Timesheet=({user})=>{
    const history= useHistory();
   // const navigate = useNavigate();
    //const d = new Date();
    //let text = d.toLocaleTimeString();
    console.log(history);
    const [final,updatefinal]=useState(0);
    //const [Fenable, Fdisable]=useState(true);
    const [old1,new1]=useState({
        date:"",
        time:"",
        etime:"",
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
    
    function calcu()
    {
        
        const startTime = document.getElementById('start-time').value;
        const endTime = document.getElementById('exit-time').value;
        
        let [startHour, startMinute] = startTime.split(':');
        let [endHour, endMinute] = endTime.split(':');
        const starttimehour=startHour*60*60+startMinute*60;
        const endtimehour=endHour*60*60+endMinute*60;
        const totalhours=endtimehour-starttimehour;
        if(totalhours<0)
        {
            alert("Please write correct exit time");
        }
        else if( final> 12)
        {
            alert("Your working hour is over 12 hour so need to get permission to submit timesheet")
        }
        else{

            updatefinal(Math.round((totalhours/3600)*10)/10);
            new1((pre)=>{
                return{
                  ...pre,
                  hours:final,
                }
        
               })
            console.log("jkjkjkjkkj",final);
            //document.getElementById('decimalHours').textContent=final;
        }
    }
    const submitted=(event)=>{
        //console.log(old1.hours);
        //<Working data1={old1.hours}/>
     
     
    //const data = {  };
    //<Link to="/Working" state={{test: old1.hours}}>
    //Go to ProfileTwo
  //</Link>
 

        console.log("INNNN",typeof(window.localStorage.getItem("TimeSheet")));
    
            if(old1.date && old1.etime && old1.hours && old1.pcode && old1.pname && old1.time && old1.work && old1.id && window.localStorage.getItem("TimeSheet")==="true")
            {
                //Fdisable(false);
                window.localStorage.setItem("TimeSheet",false);
                //alert("Your timesheet is successfully submitted");
                axios.post("http://localhost:8000/timesheet",old1)
                .then(res=>{
                    alert(res.data.message);
                    new1({
                        date:"",
                        time:"",
                        etime:"",
                        pcode:"",
                        pname:"",
                        hours:"",
                        work:"",
                        id:user.id,
                    })
                })
               .catch(err=>console.log(err));
               history.push({ pathname: "/Working", state: {data: old1.hours} });
            }else{
                if(window.localStorage.getItem("TimeSheet")==="false")
                {
                    alert("You have submitted timesheet previously ");
                }else{
                    alert("Invalid input field");
                }
              
            }
        
       
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
      
       {view1===1? <form className="container">
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
            <input type="time" id="start-time"   name="time" onChange={changing} value={old1.time} />
            
        </div>
        <div class="form-item">
            <label for="task-date">Exit Time</label>
            <input type="time" id="exit-time"  name="etime" onChange={changing} value={old1.etime}/>
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
            <input type="text" id="decimal-hour"  value={old1.hours}/>
            <div className="ball" onClick={calcu}>show hour</div>
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