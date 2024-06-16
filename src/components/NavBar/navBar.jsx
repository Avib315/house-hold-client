import { NavLink } from 'react-router-dom'
import './navBar.scss' 
import { IoHomeSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import React from 'react';
export default function NavBar(){
  return (
<div className='NavBar'>
  <div></div>
<NavLink className={({isActive})=>{isActive ? "activeLink" : ""}} to={"/home"}><IoHomeSharp/> </NavLink>
<NavLink to={"/user"}><FaUser/> </NavLink>
<NavLink to={"/recipes"}><FaBook/> </NavLink>
</div>
  )
}
