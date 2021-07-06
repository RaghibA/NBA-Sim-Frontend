import React from "react";
// Component imports
import Results from './components/Results'
import Header from './components/Header'
import StartSim from './components/StartSim'

function App() {
	return (
    <div>
			<Header />
      <StartSim/>
      <Results />
    </div>
	);
}
export default App;