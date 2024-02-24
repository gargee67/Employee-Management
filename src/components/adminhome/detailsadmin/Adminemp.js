import React from "react";
import {Sidebar} from "../slide";
import { Navbar } from "../../navbar/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Adminemp.css";
//import { FontAwesomeIcon} from "@fortawesome/fontawesome-free";
//import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Adminemp = ()=>{
    const [eregisters, setEregisters] = useState([])
    const [user3, setuser3] = useState([])
    const click1 = () => {
        const id = document.getElementById("mySearch").value;
        console.log(id);
        axios.get(`http://localhost:8000/register/${id}`)
        //.then(user3 => console.log(user3.data))
        .then(user3 => setuser3(user3.data))
        .catch(err => console.log(err))
    }
    useEffect(()=> {
        axios.get("http://localhost:8000/register")
        .then(eregisters => setEregisters(eregisters.data))
        .catch(err => console.log(err))
    }, [])

    const deleteRegister = async(fname,id) =>{
        alert(id);
        //if(window.confirm(are you sure you want to delete ${fname})){
            await axios.delete(`http://localhost:8000/register/${id}`)
                .then((eregisters) => {
                    //setEregisters((prevUser)=> prevUser.filter((user)=> user.id !==))
            setEregisters((prevEregister)=> prevEregister.filter((eregisters)=> eregisters.id !== id))
            console.log(eregisters);
                    console.log("hghghh",eregisters.data.value);
                })
                .catch(err => console.log(err))
    };

    
            return(
        <>
            
        <Navbar/>   
        <Sidebar/>
    <div class="search-container1">
        <input type="text" class="search-input" id="mySearch" placeholder="Search By id..."/>
        <button class="search-button1" onClick={()=>click1()}>
            Search
        </button>
    </div>
            <div >
            <div>
                <table className="table">
                    
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                DOB
                            </th>
                            <th>
                                Gender
                            </th>
                            <th>
                                ID
                            </th>
                            <th>
                                Delete
                            </th>
                            <th>
                                Update
                            </th>
                        </tr>
                

                    
                        {
                            user3.length!==1 ?      
                            eregisters.map(eregisters => {
                                return(
                                <tr>
                                
                                    <td>{eregisters.fname}</td>
                                    <td>{eregisters.email}</td>
                                    <td>{eregisters.dob}</td>
                                    <td>{eregisters.gender}</td>
                                    <td>{eregisters.id}</td>
                                    <td><button onClick={() => deleteRegister(eregisters.fname, eregisters.id)}>
                                    Delete</button></td>
                                    <td><Link to={`/admineditemp/${eregisters.id}`}><button>Edit</button></Link></td>
                                </tr>
                                )
                            })
                    
                       :null}
                       
                       {
                        user3.length === 1 ?
                            user3.map(eregister => {
                                return(
                                <tr>
                                
                                    <td>{eregister.fname}</td>
                                    <td>{eregister.email}</td>
                                    <td>{eregister.dob}</td>
                                    <td>{eregister.gender}</td>
                                    <td>{eregister.id}</td>
                                    <td><button onClick={() => deleteRegister(eregister.fname, eregister.id)}>
                                    Delete</button></td>
                                </tr>
                                )
                            })
               :null
                       }
            
                </table>
                </div>
            </div>
        </>
    )
}