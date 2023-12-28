import React from 'react'
import Logo from "../assets/yutb_logo.png"
import "./styles/style.css"
import { CiSearch } from "react-icons/ci";
import { FaMicrophone, FaRegBell, FaUserCircle } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMenuOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <div>
      <div className='d-flex justify-content-between align-items-center  '>
        <div className='d-flex justify-content-between align-items-center  '>
          <IoMenuOutline className='ms-3 me-4 fs-4 accordion-button' />
          <img src={Logo} alt='logo' className='log_img' />
        </div>
        <div>
 

          <div className="nav_3  d-flex justify-content-between align-items-center ">
            <input type="text" placeholder='Search' className='main_text_sr px-5 rounded-start-pill border border-2 form-control' />
            <button className='main_text_btn rounded-end-circle border border-1 border-light p-2 px-3'><CiSearch /></button>
            <div className='main_voice bg-secondary-subtle p-1 mx-4  rounded-circle ' ><FaMicrophone className='main_icon m-2'  style={{ }}/> </div>
          </div>


        </div>
        <div className='nav_4 me-5 d-flex justify-content-between align-items-center '>
          <div className='nav_4_icon'>
            <RiVideoAddLine className='fs-4 text-secondary mx-3' />
          </div>
          <div className='nav_4_icon'>
            <FaRegBell className='fs-4 text-secondary mx-3' />
          </div>
          <div className='nav_4_icon'>
            <FaUserCircle className='fs-4 text-secondary mx-3 ' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
