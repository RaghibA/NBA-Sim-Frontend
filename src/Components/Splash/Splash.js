import React from 'react'

// Styles Import
import './Splash.css'

const Splash = () => {
  return (
    <div className='bg-secondary splash-container'>
      <div className='splash-grid'>
        <div className='bg-accent splash-heading'>
          <div>
            <h1 className='text-primary'>Welcome to NBA 1V1</h1>
          </div>
        </div>
        <div className='splash-section splash-1'>
          <h2 className='text-primary'>Pick Your Players</h2>
        </div>
        <div className='splash-section splash-2'>
          <h2 className='text-primary'>Set The Score</h2>
        </div>
        <div className='splash-section splash-2'>
          <h2 className='text-primary'>Start The Game</h2>
        </div>
      </div>
    </div>
  )
}

export default Splash