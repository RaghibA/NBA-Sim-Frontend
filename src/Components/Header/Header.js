import React from 'react'

// Styles Import
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='nav'>
        <div className='nav-logo'>
          <h1 style={{fontSize: '18px'}}>NBA 1V1</h1>
        </div>
        <div className='nav-links'>
          <a href='https://github.com/RaghibA/nba-1v1-sim-api' rel='noreferrer' target='_blank' className='nav-link'>About</a>
        </div>
      </div>
    </div>
  )
}

export default Header