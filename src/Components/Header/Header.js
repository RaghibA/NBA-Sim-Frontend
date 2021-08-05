import React from 'react'
import { Icon } from '@material-ui/core';

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
          <a href='' className='nav-link'>About</a>
        </div>
      </div>
    </div>
  )
}

export default Header