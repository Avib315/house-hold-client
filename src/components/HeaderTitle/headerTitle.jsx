import { NavLink } from 'react-router-dom'
import './headerTitle.scss'
import React from 'react'
import logo from '../../assets/logo.svg'
import { FaUser } from 'react-icons/fa'

export default function HeaderTitle({ title, isProtected = true , isHome = true }) {
  return (
    <div className='HeaderTitle'>
      {isProtected && <NavLink  to={"/setting"} className='setting'><FaUser/> </NavLink>}
      <h1>{title}</h1>
      {(isProtected&&isHome) && <NavLink to={"/home"} className='back'><img src={logo} alt='icon'/></NavLink>}
    </div>
  )
}
