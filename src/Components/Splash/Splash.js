import React from 'react'
import img1 from '../../assets/img1.png'

// Styles Import
import './Splash.css'

const Splash = () => {
  return (
    <div className='bg-secondary splash-container'>
      <div className='bg-accent splash-heading'>
        <div>
          <h1 className='text-primary'>Welcome to NBA 1V1</h1>
        </div>
      </div>
      <div className='splash-grid'>
        <div className='splash-section splash-1'>
          <h2 className='text-primary'>Pick Your Players</h2>
          <div>
            <img className='splash-img' src={img1} alt=''/>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sequi dolorum laboriosam.</p>
        </div>
        <div className='splash-section splash-2'>
          <h2 className='text-primary'>Set The Score</h2>
          <div>
            <img className='splash-img' src={img1} alt=''/>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='splash-section splash-2'>
          <h2 className='text-primary'>Start The Game</h2>
          <div>
            <img className='splash-img' src={img1} alt=''/>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, iste. Repellendus!</p>
        </div>
      </div>
    </div>
  )
}

export default Splash