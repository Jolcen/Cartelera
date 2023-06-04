import React from 'react'

import { RiHome5Line } from "react-icons/ri"
import { BsTicketPerforated } from "react-icons/bs"
import { AiOutlineStar } from "react-icons/ai"
import { BsPerson } from "react-icons/bs"

import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='navbar-container'>
        
        <RiHome5Line/>
        <BsTicketPerforated/>
        <AiOutlineStar/>
        <BsPerson/>
    </div>
  )
}

export default NavBar