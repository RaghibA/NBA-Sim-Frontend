import React, {useState} from 'react';

// Package Imports

// Component Imports
import Header from './Components/Header/Header'
import Splash from './Components/Splash/Splash'
import PlayerSelect from './Components/PlayerSelect/PlayerSelect'
import Simulation from './Components/Simulation/Simulation'
import About from './Components/About/About'

import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

const App = () => {

  const [simData, setSimData] = useState({
    player1: 1,
    player2: 2,
    scoreLimit: 11,
    sim: false
  })

  const simDataHandler = (newSimData) => {
    setSimData(newSimData)

    console.log(simData);
  }

  return (
    <div className="App">
      <Header />
      <Splash />
      <PlayerSelect onSaveSimData={simDataHandler}/>
      <Simulation />
      <About />
    </div>
  );
}

export default App;
