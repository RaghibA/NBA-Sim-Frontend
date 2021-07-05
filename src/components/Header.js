// HEADER
import React from "react"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import logo from '../images/bball2.png'

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static" style={{
          backgroundColor: '#F4D6CC',
          marginTop: '0'
        }}>

          <Toolbar variant="dense">

            <img src={logo} alt="BBALL 1v1" style={{
              maxWidth: '40px',
              margin: '2px'
            }} />
            
            <Typography variant="h6" style={{
              fontSize: '120%',
              color: '#32373B',
              marginLeft: '5px',
              marginTop: '10px'
            }}>
              NBA 1v1
            </Typography>

          </Toolbar>

        </AppBar>
      </div>
    )
  }
}