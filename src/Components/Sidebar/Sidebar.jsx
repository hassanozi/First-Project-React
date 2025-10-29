import React from 'react'
import { Link } from 'react-router-dom'
import hassan from '../../assets/images/hassan.jpg'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <>
    
    <div className='backGround vh-100'>
      <img src={hassan} className="w-75 rounded-circle mt-5" alt="Hassan" />
      <h1 className='mt-3 fw-bold font fontSize'>Hassan Abdelrazek</h1>
      <p className='font fontSize'>
        <span className='text-primary'>UI/UX Designer</span> in Egypt
      </p>

      <ul className="nav nav-pills flex-column align-items-center mt-4">
        <li className="nav-item"><Link to="/home" className="text-black text-decoration-none font fontSize hover-border">Home</Link></li>
        <li className="nav-item mt-2"><Link to="/about" className="text-dark text-decoration-none font fontSize hover-border">About</Link></li>
        <li className="nav-item mt-2"><Link to="/skills" className="text-dark text-decoration-none font fontSize hover-border">Skills</Link></li>
        <li className="nav-item mt-2"><Link to="/experience" className="text-dark text-decoration-none font fontSize hover-border">Experience</Link></li>
        <li className="nav-item mt-2"><Link to="/work" className="text-dark text-decoration-none font fontSize hover-border">Work</Link></li>
      </ul>
    </div>
    </>
  )
}
