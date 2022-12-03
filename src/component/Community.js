import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"
import './Community.css'
import {useState} from "react";

const Community = () => {
  const [NavExpanded, setNavExpanded]=useState(false)

  const handleClick=()=>{
    setNavExpanded(!NavExpanded)

  }
  return (
    <div>
        
            
            <nav className='navigation'>
            <h3 className='brand-name'>Logo</h3>
            <button onClick={handleClick} className='hamburger'>
                    <AiOutlineMenu  />
                </button>
                <div className={NavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                <ul>
               <li><a href="/#">Home</a></li>
              <li><a href="/#">About</a></li>
               <li><a href="/#">Contact</a></li>
               <li><a href="/#">Live</a></li>
                </ul>
                </div>
            </nav>
            
        
    </div>
  )
}

export default Community