import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Naviget = () => {
  return (
    <div className='Naviget'>
         <h1>LOGO</h1>

        <ul className='ul'>
            
            <li className='li'><Link className='a' to="/">Home</Link></li>

            <li className='li'><Link className='a' to="/about">Movis</Link></li>

            <li className='li'><Link className='a' to="/contact">Users</Link></li>

            <li className='li'><Link className='a' to="/Login">Login</Link></li>

        </ul>
        
    </div>
  )
}

export default Naviget