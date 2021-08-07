import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Styles Import
import './Simulation.css'
import SimulationResults from './SimulationResults'

const Simulation = (props) => {

  const [playerOne, setPlayerOne] = useState(1)
  const [playerTwo, setPlayerTwo] = useState(7)
  const [scoreLimit, setScoreLimit] = useState(11)
  const [simResults, setSimResults] = useState({})

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
  }

  return (
    <div className='bg-secondary select-container'>

      <h1 className='form-heading'>Configure Simulation</h1>

      <form className='form-control' onSubmit={submitHandler}>

        <select className='select-themed form-p1' onChange={playerOneChangeHandler}>
          <option selected label='Lebron James'>1</option>
          <option label='Luka Doncic'>2</option>
          <option label='Kobe Bryant'>3</option>
          <option label='Steph Curry'>4</option>
          <option label='Giannis Antentokounmpo'>5</option>
          <option label='Russel Westbrook'>6</option>
          <option label='Michael Jordan'>7</option>
          <option label="Shaquille O'Neal">8</option>
        </select>

        <label className='text-primary vs'>VS</label>

        <select className='select-themed form-p2' onChange={playerTwoChangeHandler}>
          <option label='Lebron James'>1</option>
          <option label='Luka Doncic'>2</option>
          <option label='Kobe Bryant'>3</option>
          <option label='Steph Curry'>4</option>
          <option label='Giannis Antentokounmpo'>5</option>
          <option label='Russel Westbrook'>6</option>
          <option selected label='Michael Jordan'>7</option>
          <option label="Shaquille O'Neal">8</option>
        </select>

        <input className='form-score' onChange={scoreLimitChangeHandler} type='range' min='1' max='30' />

        <button className='form-button' type='submit'>SIM</button>
      </form>

      <SimulationResults sim={ simResults }/>

    </div>
  )
}

export default Simulation