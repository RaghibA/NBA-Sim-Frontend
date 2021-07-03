// HEADER
import React from "react"

// Material 
import { Divider } from '@material-ui/core';

// #4A5859 color for player cards

// Allow user to select two players
export default class Players extends React.Component {
  state = {
    players_queued: false
  }

  render() {
    const text_style = {
      margin: 'auto',
      width: '50%',
      paddingBottom: '2rem',
      paddingTop: '2rem'
    }
    return (
      <div style={{marginBottom: '2rem'}}>
        <h1 style={text_style}>Select two players to simulate a 1 on 1 game.</h1>
        <Divider />
      </div>
    )
  }
}