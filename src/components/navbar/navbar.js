import React from "react";
import "./navbar.css";



 export const Navbar=()=>{
 
    return(
        
        <>
        <nav>
    <div class="navbar">
      <i class='bx bx-menu'></i>
      <div class="logo"><h1>TexSa</h1></div>
      <div class="nav-links">
        <div class="sidebar-logo">
          <span class="logo-name">CodingLab</span>
          <i class='bx bx-x' ></i>
        </div>
      </div>
      <div class="search-box">
        <i class='bx bx-search'></i>
        <i class="fa-solid fa-message"></i>
        
      </div>
    </div>
  </nav>
        </>
    )
}