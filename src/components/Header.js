// HEADER
import React from "react"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { red } from "@material-ui/core/colors";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static" style={{
          backgroundColor: '#F4D6CC',
          marginTop: '0'
        }}>
          <Toolbar variant="dense">
            <Typography variant="h6" style={{
              fontSize: '100%',
              color: '#32373B'
            }}>
              BBALL 1v1
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}