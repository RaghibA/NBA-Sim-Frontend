// HEADER
import React from "react"

// Material 
import { makeStyles, Divider, Button, Paper } from '@material-ui/core';

// #4A5859 color for player cards

// Allow user to select two players
export default class Players extends React.Component {
  state = {
    players_queued: false
  }

  render() {

    return (
      <div style={{ marginBottom: '2rem' }}>
        <Divider />
      </div>
    )
  }
}