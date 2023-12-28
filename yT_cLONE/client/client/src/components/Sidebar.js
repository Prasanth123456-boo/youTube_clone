import React from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
import "./styles/style.css"
const Sidebar = () => {
  return (
    <div>
        <div style={{margin:"0", padding:"0"}}>
           <div className="icons  pt-3 justify-content-enter align-item-center"><GoHome className='fs-4 mx-3  fw-1'/> 
            <p className='font_icon ms-2 pt-1 ps-2'> Home</p>
           </div>
           <div className="icons  pt-3 justify-content-enter align-item-center"><SiYoutubeshorts  className='fs-4 mx-3  fw-1'/>
           <p className='font_icon ms-2 pt-1 ps-2'> Shorts</p>
           </div>
           <div className="icons  pt-3 justify-content-enter align-item-center"><MdOutlineSubscriptions className='fs-4 mx-3 fw-1'/>
           <p className='font_icon  pt-1 ps-1'>Subscriptions</p> 
           </div>
           <div className="icons  pt-3 justify-content-enter align-item-center"><CiYoutube className='fs-4 mx-3  fw-1'/>
            <p className='font_icon ms-2 pt-1 ps-2'>You</p> 
           </div>

           
           
        </div>
    </div> 
  )
}

export default Sidebar