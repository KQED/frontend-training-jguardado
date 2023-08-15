import React from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './displayUsers.js'

const Navbar = () => {
  const navigate = useNavigate()

  const handleHomeButtonClick = () => {
    navigate('/home')
  }

  const handleCountButtonClick = () => {
    navigate('/counter')
  }

  const handleAboutButtonClick = () => {
    navigate('/about')
  }

  const handleContactButtonClick = () => {
    navigate('/contact')
  }

  return (
  <div className='navbar'>
    <h1 className='title'>KQED v1.0 alpha</h1>
      <nav>
          <button className='navBtn' onClick={handleHomeButtonClick}>Home</button>
          <button className='navBtn' onClick={handleCountButtonClick}>Count</button>
          <button className='navBtn' onClick={handleContactButtonClick}>Contact</button>
          <button className='navBtn' onClick={handleAboutButtonClick}>About</button>
      </nav>
    <div className='login'>
      {/* Form Component will be part of the Navbar */}
      <Login />
    </div>
  </div>
  )
}

export default Navbar
