import React from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './displayUsers.js'

const Navbar = () => {
  const navigate = useNavigate()

  const handleHomeButtonClick = () => {
    navigate('/home')
  }

  const handleBlogButtonClick = () => {
    navigate('/blog')
  }

  const handleCountButtonClick = () => {
    navigate('/counter')
  }


  return (
    <header>
      <div className='navbar'>
        <h1 className='title'>KQED v1.0 alpha</h1>
        <nav>
          <button className='navBtn' onClick={handleHomeButtonClick}>Home</button>
          <button className='navBtn' onClick={handleBlogButtonClick}>Blog</button>
          <button className='navBtn' onClick={handleCountButtonClick}>Count</button>
        </nav>
        <div className='login'>
          {/* Form Component will be part of the Navbar*/}
          <Login />
        </div>
      </div>
    </header>
  )
}

export default Navbar