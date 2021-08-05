import React from 'react';

// Package Imports

// Component Imports
import Header from './Components/Header/Header'
import About from './Components/About/About'

import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
    </div>
  );
}

export default App;
