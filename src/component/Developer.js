import React from 'react'
import "./Developer.css"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { useState } from 'react'

const Developer = () => {
    const [open, setOpen]=useState(false)

    const handleClick=()=>{
        setOpen(!open)
    }
  return (
    <div>
        <nav className='navbar'>
            <h2>Logo</h2>
            
           
            <ul className={open ? 'nav-links active' : 'nav-links'}>
                <li className='nav-item'>Home</li>
                <li className='nav-item'>About</li>
                <li className='nav-item'>Shop</li>
                <li className='nav-item'>Contact</li>
            </ul>    
            <button onClick={handleClick} className="nav-icon">
             {open ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
        </nav>
    </div>
  )
}

export default Developer