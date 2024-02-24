import React, { useEffect, useState } from "react";
//import "../adminleave/adminleave.css";
import "./adminleave.css";
import { Navbar } from "../../navbar/navbar";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { Sidebar } from "../slide";
export function Adminleave({ user }) {
    const history = useHistory();

 
    
    const [users, newuser3] = useState([]);
   

    useEffect(() => {
    axios.get('http://localhost:8000/getUsers')
            .then(users=> newuser3(users.data))
            .catch(err => console.log(err));

    
    }, []);

  


    return (<>
        <Navbar />
        <div className="big_div">
        <Navbar/>   
        <Sidebar/>
            <div className="table-from">
                <table className="table1">
                    <tr className="tr1">
                        <th className="th1">Employee Id</th>
                        <th className="th1">Employee Name</th>
                        <th className="th1">Date</th>
                        <th className="th1">Country</th>
                        <th className="th1">Leave Subject</th>
                        <th className="th1">Reason </th>
                        <th className="th1">status</th>
                        </tr>

{

  users.map(userss =>{
   
    
      return(
        <tr className="tr1">
            <td className="td1">{userss.id}</td>
            <td className="td1">{userss.name}</td>
            <td className="td1">{userss.date}</td>
            <td className="td1">{userss.country}</td>
            <td className="td1">{userss.subject}</td>
            <td className="td1">{userss.message}</td>
            <td className="td1"> <Link to={`/adminleaveedit/${userss.id}`}><button>Edit</button></Link> </td>
        </tr>
  )
      
  })

}
</table>
</div>
</div>
  </>)
}