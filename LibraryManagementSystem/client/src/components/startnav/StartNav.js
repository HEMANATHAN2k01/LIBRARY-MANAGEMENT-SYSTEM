import React from 'react'
import { Link } from "react-router-dom";
import '../startnav/Startnav.css'

const StartNav = () => {
  return (
    <div className='start-nav'>
      <Link to='/'><img width="48" height="48" src="https://img.icons8.com/color-glass/48/library-building.png" alt="library-building"/></Link>
      <h2>LIBRARY MANAGEMENT SYSTEM</h2>
    </div>
  )
}

export default StartNav
