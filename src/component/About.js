
import React, { useState } from 'react'
import './About.css'
import {AiOutlineMenu} from "react-icons/ai"



const About = () => {
  const [nav, setNav]=useState(false)
  
  const handleClick =()=> {
    setNav(!nav)
    
  }
  return (
    <div>
      <div  className='flex-container'>
      <a href="/#" className='logo'>DEFI</a>
      <button onClick={handleClick} className='icon-button'>
        <AiOutlineMenu />
      </button>
      <div className={nav ? 'nav-menu expand' : "nav-menu"}>
      <a href="/#">Community</a>
      <a href="/#">Platform</a>
      <a href="/#">Platform</a>
      <a href="/#">About</a>
      </div>
    </div>
    </div>
  )
}

export default About








