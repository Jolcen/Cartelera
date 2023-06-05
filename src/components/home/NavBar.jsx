import React from 'react'
import { NavLink } from 'react-router-dom'

import { RiHome5Line } from "react-icons/ri"
import { BsTicketPerforated } from "react-icons/bs"
import { AiOutlineStar } from "react-icons/ai"
import { BsPerson } from "react-icons/bs"

import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='navbar-container'>
        <NavLink to={"/"}><RiHome5Line/></NavLink>
        <NavLink><BsTicketPerforated/></NavLink>
        <NavLink><AiOutlineStar/></NavLink>
        <NavLink><BsPerson/></NavLink>
    </div>
  )
}

export default NavBar