import React from "react";
// Component imports
import Results from './components/Results'
import Header from './components/Header'
import SelectPlayer from './components/SelectPlayer'

function App() {
	return (
    <div>
			<Header />
      <SelectPlayer/>
      <Results />
    </div>
	);
}
export default App;