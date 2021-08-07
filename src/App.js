import React, {useState} from 'react';

// Package Imports

// Component Imports
import Header from './Components/Header/Header'
import Splash from './Components/Splash/Splash'
import Simulation from './Components/Simulation/Simulation'
import About from './Components/About/About'

import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

const App = () => {

  return (
    <div className="App">
      <Header />
      <Splash />
      <Simulation />
      <About />
    </div>
  );
}

export default App;
