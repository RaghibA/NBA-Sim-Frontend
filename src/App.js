import React from "react";

// Component imports
import Results from './components/results/Results'
import Header from './components/header/Header'
import PlayerSelect from './components/playerSelect/PlayerSelect'

// Util imports
import PlayerList from './utils/PlayerList'

function App() {

	return (
    <div>
			<Header />
      <PlayerSelect players={PlayerList.players}/>
      <Results />
    </div>
	);
}
export default App;