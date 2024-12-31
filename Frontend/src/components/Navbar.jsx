import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nav'>
      <h1>CampusQuiz</h1>
     {/* <ul>
        <li>Home</li>
        <li>About</li>  
     </ul> */}
      <button className='nav-btn'>Login</button>
    </div>
  )
}

export default Navbar
