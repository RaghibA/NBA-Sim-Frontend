import React, { useState } from 'react'

// Styles Import
import './PlayerSelect.css'

const PlayerSelect = (props) => {

  const [playerOne, setPlayerOne] = useState(1)
  const [playerTwo, setPlayerTwo] = useState(2)
  const [scoreLimit, setScoreLimit] = useState(11)
  const [sim, setSim] = useState(false)

  const playerOneChangeHandler = (event) => {
    setPlayerOne(+event.target.value)
  }

  const playerTwoChangeHandler = (event) => {
    setPlayerTwo(+event.target.value)
  }

  const scoreLimitChangeHandler = (event) => {
    setScoreLimit(+event.target.value)
    console.log(scoreLimit);
  }

  const simHandler = (event) => {
    setSim(true)
    console.log(sim);
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const simData = {
      playerOne,
      playerTwo,
      scoreLimit,
      sim
    }
    console.log(simData);

    props.onSaveSimData(simData)

    setSim(false)
  }

  return (
    <div className='bg-primary select-container'>
      <form onSubmit={submitHandler}>

        <select onChange={playerOneChangeHandler}>
          <option selected label='Lebron James'>1</option>
          <option label='Luka Doncic'>2</option>
          <option label='Kobe Bryant'>3</option>
          <option label='Steph Curry'>4</option>
          <option label='Giannis Antentokounmpo'>5</option>
          <option label='Russel Westbrook'>6</option>
          <option label='Michael Jordan'>7</option>
          <option label="Shaquille O'Neal">8</option>
        </select>

        <select onChange={playerTwoChangeHandler}>
          <option label='Lebron James'>1</option>
          <option label='Luka Doncic'>2</option>
          <option label='Kobe Bryant'>3</option>
          <option label='Steph Curry'>4</option>
          <option label='Giannis Antentokounmpo'>5</option>
          <option label='Russel Westbrook'>6</option>
          <option selected label='Michael Jordan'>7</option>
          <option label="Shaquille O'Neal">8</option>
        </select>

        <input onChange={scoreLimitChangeHandler} type='range' min='1' max='30'/>

        <button onClick={simHandler} type='submit'>SIM</button>

      </form>
    </div>
  )
}

export default PlayerSelect