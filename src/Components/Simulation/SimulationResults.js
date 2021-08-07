import React from 'react'

import './SimulationResults.css'

const SimulationResults = (props) => {

  console.log(props.sim);

  return (
    <div>
      <div className='sim-container'>
        <div className='player1-sim'>
        </div>

        <div className='player2-sim'>

        </div>

        <div>

        </div>

      </div>
    </div>
  )
}

export default SimulationResults