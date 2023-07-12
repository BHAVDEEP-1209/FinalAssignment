import React from 'react'
import logo from "../assets/logo.svg"
import "../Styles/Navbar.scss"
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
  return (
    <div className='nav'>
        <img src={logo} alt="" />
        <PersonIcon />
    </div>
  )
}

export default Navbar