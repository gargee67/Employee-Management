import React, { useState } from "react";
import "./model.css";
import axios from "axios";

export const Modal=({data,onClose,department,id})=>{

function calculatesalary(){
    const changeh= parseInt( document.getElementById('chargeonhour').value);
    const overt= parseInt(document.getElementById('overtime').value);
    const ocharge= parseInt(document.getElementById('chargeonoverhour').value);
    const bonus= parseInt(document.getElementById('bonus').value);
    const hr1=data;
    //console.log(hr1,changeh,overt,ocharge);
    const total=changeh+overt+ocharge+bonus;
    //console.log(total);
    document.getElementById("countt").textContent=total+"Rs";
}


    const[startvalue, setstartvalue]=useState({
        department_name:department,
        totalwork:data,
        chargeonhour:"",
        overtime:"",
        chargeonoverhour:"",
        bonus:"",
        month1:"",

    })
    const eve=(event)=>{
        console.log(event.target.name);
        const name1=event.target.name;
        const val1=event.target.value;
        console.log(event.target.value);
       setstartvalue((pre)=>{
        return({
            ...pre,
            [name1]:val1
        })
       })
    }
    const submitdata=async (event)=>{
        
        const changeh= parseInt( document.getElementById('chargeonhour').value);
        const overt= parseInt(document.getElementById('overtime').value);
        const ocharge= parseInt(document.getElementById('chargeonoverhour').value);
        const bonus= parseInt(document.getElementById('bonus').value);
        const hr1=data;
        //console.log(hr1,changeh,overt,ocharge);
        const total=changeh+overt+ocharge+bonus;
        console.log(total);
        const fromdata=new FormData();
        fromdata.append('totalSalary',total);
        fromdata.append('id',id);
        fromdata.append('totalwork',startvalue.totalwork);
        fromdata.append('overtime',startvalue.overtime);
        fromdata.append('month',startvalue.month1);
        console.log(...fromdata);
        await axios.post("http://localhost:8000/salary",fromdata)
        .then(res=>{
            console.log(res);
            alert("Employee salary sheet Submitted")
        })
        .catch(err=>console.log(err));
    }
    return(
        
        <div className="fixed">
            <div className="modal-content">
                
            <span class="close" onClick={()=>onClose()}>&times;</span>
                <div className="count">
                   
                   <h1>Salary Calculate</h1>
                    <label for="name 1" className="t">Department:</label>
                    <h3>{department}</h3> <br/>
                    <label for="entry-date 1" className="t">Basic Salary:</label>
                    <input type="text" id="chargeonhour" name="chargeonhour" onChange={eve} value={startvalue.chargeonhour}/><br/>
                    <label for="name 1" className="t">Employee Total Hour work in this Month</label>
                    <h3 id="hr">{data}hr</h3><br/>
                    <label for="entry-date 1" className="t">Month:</label>
                    <input type="text" id="month1" name="month1" onChange={eve} value={startvalue.month1}/><br/>
                    
                    <label for="entry-date 1" className="t">House Rental Allowance</label>
                    <input type="text" id="overtime" name="overtime" onChange={eve} value={startvalue.overtime}/><br/>
                    <label for="entry-date 1" className="t">Employer Provident Fund:</label>
                    <input type="text" id="chargeonoverhour" name="chargeonoverhour" onChange={eve} value={startvalue.chargeonoverhour}/><br/>
                    <label for="entry-date 1" className="tt">Performance Bonus:</label>
                    <input type="number" id="bonus" name="bonus" onChange={eve} value={startvalue.bonus}/><br/>
                    <div className="gh">
                    <button onClick={calculatesalary}>Calculate</button>
                    <button onClick={()=>submitdata()}>Submit</button>
                    </div>

                    <p id="countt"></p>
                </div>
                
                </div>
        </div>
    )
}