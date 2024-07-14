import React from "react";
import "./dashbord.css";

export const Dashbord=()=>{
    return(
<>
<div class="grid-item3">
      <div class="inner-grid1">
        <div class="col-div-4-1">
          <div class="box-2">
            <div class="content-box-1">
            <p class="head-1">OVERALL PROGRESS <span></span></p>
      
            <div class="circle-wrap">
          <div class="circle">
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div class="inside-circle"> 90% </div>
          </div>
        </div>
          </div>
          </div>
              </div>
      </div>
      <div class="inner-grid2">
        <div class="col-div-4-2">
          <div class="box-2">
                <div class="content-box-2">
                <p class="head-2">PROJECT LAUNCH DATE<span></span></p>
                <br/>
                </div>
                <div class="box-3">
                  <div class="flag"><i class="fa-solid fa-flag-checkered"></i></div>
                <div class="days">170 Days</div>
                </div>
            
        
        </div>
      </div>
      </div>
        
        <table>
          <tr>
            <th>Employee</th>
            <th>Task</th>
            <th>Dead-Line</th>
          </tr>
          <tr>
            <td>Risha Mondal</td>
            <td>Maria Anders</td>
            <td>2024-08-15</td>
          </tr>
          <tr>
            <td>Writtika Mitra</td>
            <td>Francisco Chang</td>
            <td>2024-02-13</td>
          </tr>
          <tr>
            <td>Sweta</td>
            <td>Roland Mendel</td>
            <td>2024-07-11</td>
          </tr>
          <tr>
            <td>Island roy</td>
            <td>Helen Bennett</td>
            <td>2024-12-07</td>
          </tr>
          
          
        </table>
      
    </div>
</>
    )
}