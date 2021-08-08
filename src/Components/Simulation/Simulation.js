import React, { useState } from 'react'
import { Slider, Typography } from '@material-ui/core'
import axios from 'axios'

// Styles Import
import './Simulation.css'

const Simulation = (props) => {

  const [playerOne, setPlayerOne] = useState(1)
  const [playerTwo, setPlayerTwo] = useState(7)
  const [scoreLimit, setScoreLimit] = useState(11)
  const [simResults, setSimResults] = useState(undefined)

  // Simulation states
  // 1. Player1 Score
  // 2. Player2 Score
  // 3. Turn #
  // 4. Possession
  // 5. Description: ADD TO API

  // Player Objects
  const players = ['', 'LeBron James', 'Luka Doncic', 'Kobe Bryant',
    'Steph Curry', 'Giannis Antentokounmpo', 'Russel Westbrook', 'Michael Jordan',
    "Shaquille O'Neal"]

  const playerOneChangeHandler = (event) => {
    setPlayerOne(+event.target.value)
  }

  const playerTwoChangeHandler = (event) => {
    setPlayerTwo(+event.target.value)
  }

  const scoreLimitChangeHandler = (event) => {
    setScoreLimit(+event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const simData = {
      playerOne,
      playerTwo,
      scoreLimit,
    }

    axios.get(`https://bball-1v1.herokuapp.com/sim/${simData.playerOne}/${simData.playerTwo}/${simData.scoreLimit}`)
      .then(res => {
        const results = res.data
        setSimResults(results)
      })
    
    //! Invoke sim handler
  }

  //? Step through simulation and update JSX elemennts dynamically
  // const simHandler = () => {

  // }

  return (
    <div className='bg-secondary select-container'>

      <h1 className='form-heading'>Configure Simulation</h1>

      <form className='form-control' onSubmit={submitHandler}>

        <select defaultValue={playerOne} className='select-themed form-p1' onChange={playerOneChangeHandler}>
          <option label='Lebron James'>1</option>
          <option label='Luka Doncic'>2</option>
          <option label='Kobe Bryant'>3</option>
          <option label='Steph Curry'>4</option>
          <option label='Giannis Antentokounmpo'>5</option>
          <option label='Russel Westbrook'>6</option>
          <option label='Michael Jordan'>7</option>
          <option label="Shaquille O'Neal">8</option>
        </select>

        <label className='text-primary vs'>VS</label>

        <select defaultValue={playerTwo} className='select-themed form-p2' onChange={playerTwoChangeHandler}>
          <option label='Lebron James'>1</option>
          <option label='Luka Doncic'>2</option>
          <option label='Kobe Bryant'>3</option>
          <option label='Steph Curry'>4</option>
          <option label='Giannis Antentokounmpo'>5</option>
          <option label='Russel Westbrook'>6</option>
          <option label='Michael Jordan'>7</option>
          <option label="Shaquille O'Neal">8</option>
        </select>

        <div className='form-score'>
          <Typography className='text-primary' style={{fontSize: '14px'}} gutterBottom>
            Score Limit
          </Typography>
          <Slider
            step={1}
            valueLabelDisplay="auto"
            defaultValue={scoreLimit}
            min={1}
            max={30}
            onChange={scoreLimitChangeHandler} />
        </div>

        <button className='form-button' type='submit'>SIM</button>
      </form>

      <div className='sim-container'>
        <div className='p1-container'>
          <h3 className='text-primary'>{players[playerOne]}</h3>
          <h1>0</h1>
        </div>

        <div className='sim-controller'>
          <button className='controller-btn'>FFW</button>
          <button className='controller-btn'>SKIP</button>
        </div>

        <div className='p2-container'>
          <h3 className='text-primary'>{players[playerTwo]}</h3>
          <h1>0</h1>
        </div>

        <div className='sim-notis'>
          {/* <p>Text notifications for each possesion</p> */}
          {simResults !== undefined ? <h1>works: now put simResults</h1> : <h1>no data yet</h1>}
        </div>
      </div>

    </div>
  )
}

export default Simulation