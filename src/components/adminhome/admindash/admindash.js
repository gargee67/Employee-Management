import React from "react";
import "./admindash.css";

export const Admindash=()=>{
    return(
    <>
   
   <div id="main">
<div class="head">
    <div class="col-div-6">
<p class="nav"> Dashboard</p>

</div>

<div class="col-div-6">
    

    
<div class="profile">

   
    <p>ADMIN <i class="fa fa-ellipsis-v dots" aria-hidden="true"></i></p>
    <div class="profile-div">
        <p><i class="fa fa-user"></i>   Profile</p>
        <p><i class="fa fa-cogs"></i>   Settings</p>
        <p><i class="fa fa-power-off"></i>   Log Out</p>
    </div>
</div>
</div>
<div class="clearfix"></div>
</div>

<div class="clearfix"></div>
<br/>

<div class="col-div-4-1">
    <div class="box">
        <p class="head-1">Total progress</p>
        <p class="number">67343</p>
        <p class="percent"><i class="fa fa-long-arrow-up" aria-hidden="true"></i> 5.674% <span>Since Last Months</span></p>
        <i class="fa fa-line-chart box-icon"></i>
    </div>
</div>
<div class="col-div-4-1">
    <div class="box">
        <p class="head-1">Staff no</p>
        <p class="number">4000</p>
        <p class="percent" style={{color:"greenyellow"}}><i class="fa fa-long-arrow-up" aria-hidden="true"></i> 5.64% <span>Since Last Months</span></p>
        <i class="fa fa-circle-o-notch box-icon"></i>
    </div>
</div>
<div class="col-div-4-1">
    <div class="box">
        <p class="head-1">Client Success</p>
        <p class="number">35343</p>
        <p class="percent"><i class="fa fa-long-arrow-up" aria-hidden="true"></i> 5.674% <span>Since Last Months</span></p>
        <i class="fa fa-shopping-bag box-icon"></i>
    </div>
</div>

<div class="clearfix"></div>
<br/>


<div class="col-div-4-1">
    <div class="box-1">
        <div class="content-box-1">
        <p class="head-1">Overview</p>
        <br/>
        <div class="m-box active">
            <p>Member Profit<br/><span class="no-1">Last Months</span></p>
            <span class="no">+2343</span>
        </div>

        <div class="m-box">
            <p>Member Profit<br/><span class="no-1">Last Months</span></p>
            <span class="no">+2343</span>
        </div>

        <div class="m-box">
            <p>Member Profit<br/><span class="no-1">Last Months</span></p>
            <span class="no">+2343</span>
        </div>
        
    </div>
</div>
</div>
<div class="col-div-4-1">
    <div class="box-1">
        <div class="content-box-1">
        <p class="head-1">Total Sale <span>View All</span></p>

        <div class="circle-wrap">
<div class="circle">
  <div class="mask full">
    <div class="fill"></div>
  </div>
  <div class="mask half">
    <div class="fill"></div>
  </div>
  <div class="inside-circle"> 70% </div>
</div>
</div>
    </div>
    </div>
</div>
<div class="col-div-4-1">
    <div class="box-1">
        <div class="content-box-1">
        <p class="head-1">Acitivity <span>View All</span></p>
        <br/>
        <p class="act-p"><i class="fa fa-circle" ></i> “Play gkugug ihohohoh hohoihio.”</p>
        <p class="act-p"><i class="fa fa-circle" style={{color:"red"}}></i> “Business opportunihuhuhihoialways another one coming.” </p>
        <p class="act-p"><i class="fa fa-circle" style={{color:"green"}}></i> Lorem ggiugiubgyigbugoyf the     printing and typesetting industry. </p>
        <p class="act-p"><i class="fa fa-circle" ></i> Lorem Ipsum is simply dguygugiugiugiung industry. </p>
        
    </div>
</div>
</div>
</div>
    </>
    )
}