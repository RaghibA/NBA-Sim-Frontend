import React from "react";

// Component imports
import Header from './components/Header'
import StartSim from './components/StartSim'
import LinearProgress from '@material-ui/core/LinearProgress'

export default class App extends React.Component {
  state = {
    loading: true,
    player1name: null,
    player2name: null,
    results: []
  };
  async componentDidMount() {
    //const url = "http://localhost:4004/sim/1/2/11";
    const url = "https://bball-1v1.herokuapp.com/sim/1/2/11";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ player1name: data.player1.name});
    this.setState({ player2name: data.player2.name});
    this.setState({ results: data.turns, loading: false });
  }
  render() {
    if (this.state.loading) {
      return (
        <div>
          <Header />
          <LinearProgress style={{
            marginTop: '2rem',
            backgroundColor: '#32373B'
          }} />
        </div>)
    }
    if (!this.state.results.length) {
      return (
        <div >
          <Header />
          <h1>No results.</h1>
        </div>);
    }
    return (
      <div style={{
        backgroundColor: '#32373B',
        color: '#F4D6CC'
      }}>
        <Header />
        <StartSim />
        {this.state.results.map(eachTurn => (
          <div key={eachTurn.turn}>
            <div>Possession: {eachTurn.turn}<br></br>{this.state.player1name}: {eachTurn.p1Score}<br></br>{this.state.player2name}: {eachTurn.p2Score}</div>
            <br></br>
          </div>
        ))}
      </div>
    );
  }
}
