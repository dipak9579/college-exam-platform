import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <h1>CampusQuiz</h1>
      <div className="nav-link">
        {/* <ul>
        <li>Home</li>
        <li>About</li>  
     </ul> */}
        <Link to="/register"> <button className='nav-btn'>Register</button></Link>
        <Link to="/login"> <button className='nav-btn'>Login</button></Link>
      </div>


    </div>
  )
}

export default Navbar
