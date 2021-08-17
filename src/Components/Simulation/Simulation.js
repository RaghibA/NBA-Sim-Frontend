import React, { useState, useEffect } from 'react'
import { Slider, Typography, LinearProgress } from '@material-ui/core'
import axios from 'axios'

// Styles Import
import './Simulation.css'

const Simulation = (props) => {

  // Config states
  const [playerOne, setPlayerOne] = useState(1)
  const [playerTwo, setPlayerTwo] = useState(7)
  const [scoreLimit, setScoreLimit] = useState(11)
  const [simResults, setSimResults] = useState(undefined)

  // Simulation states
  const [p1Score, setP1Score] = useState(0)
  const [p2Score, setP2Score] = useState(0)
  const [turnNumber, setTurnNumber] = useState(0)
  const [possesion, setPossesion] = useState(2)
  const [shotTaken, setshotTaken] = useState(0)
  
  const [madeShot, setmadeShot] = useState(false)

  const [turnCounter, setturnCounter] = useState([]);

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

  const scoreLimitChangeHandler = (event, newValue) => {
    setScoreLimit(newValue)
    //console.log(scoreLimit)
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    const simData = {
      playerOne,
      playerTwo,
      scoreLimit,
    }
    setturnCounter([]);
    console.log(simData)
    let res = await axios.get(`https://bball-1v1.herokuapp.com/sim/${simData.playerOne}/${simData.playerTwo}/${simData.scoreLimit}`)
      .then(response => {
        const results = response.data
        return results
      })

    setSimResults(res)
  }

  useEffect(() => {
    if (simResults !== undefined) { simHandler(simResults) }
  }, [simResults])

  //! Step through simulation and update JSX elemennts dynamically
  const timer = ms => new Promise(res => setTimeout(res, ms))
  const simHandler = async (sim) => {
    console.log(sim)
    console.log(sim.turns)
   
    for (let i = 0; i < sim.turns.length; i++) {

      await timer(1200)
      
      setP1Score(sim.turns[i].p1Score)
      setP2Score(sim.turns[i].p2Score)
      setTurnNumber(sim.turns[i].turn)
      setPossesion(sim.turns[i].pos)
      setshotTaken(sim.turns[i].shot)
      setmadeShot(sim.turns[i].madeShot)
      setturnCounter((prevturnCounter) => [...prevturnCounter, <p key={i} >Turn: {sim.turns[i].turn}<br /></p>]);
    }
  }

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
          <Typography className='text-primary' style={{ fontSize: '14px' }} gutterBottom>
            Score Limit
          </Typography>
          <Slider
            step={1}
            valueLabelDisplay="auto"
            value={scoreLimit}
            min={1}
            max={30}
            onChange={scoreLimitChangeHandler}
          />
        </div>

        <button className='form-button' type='submit'>SIM</button>
      </form>

      <div className='sim-container'>
        <div className='p1-container'>
          <h3 className='text-primary'>{players[playerOne]}</h3>
          <h1>{p1Score}</h1>
          {possesion === 0 ? <div className='pos-cont'><div className='sim-pos'></div></div>
            : <div className='pos-cont'><div className='sim-pos-f'></div></div>}
        </div>

        <div className='sim-controller'>
          <div>TURN: {turnNumber}</div>
          <div className='btn-container'>
            <button className='controller-btn'>FFW</button>
            <button className='controller-btn'>SKIP</button>
          </div>
        </div>

        <div className='p2-container'>
          <h3 className='text-primary'>{players[playerTwo]}</h3>
          <h1>{p2Score}</h1>
          {possesion === 1 ? <div className='pos-cont'><div className='sim-pos'></div></div>
            : <div className='pos-cont'><div className='sim-pos-f'></div></div>}
        </div>

        <div className='sim-notis'>
          {/* <p>Text notifications for each possesion</p> */}
          {simResults !== undefined ? <div><p>Shot taken: {shotTaken}</p> <p>Made Shot: {madeShot.toString()}</p> </div>
            : <div><p>Simulation Results</p> <p className='sim-res-placeholder' >no data</p> </div>}
        </div>
      </div>

      <div className='sim-turnCount'>
        {turnCounter}
      </div>

    </div>
  )
}

export default Simulation