// HEADER
import React from "react"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { red } from "@material-ui/core/colors";

export default class Header extends React.Component {
  render() {
    return (
      <div style={{
        paddingBottom: 32
      }}>
        <AppBar position="static" style={{
          backgroundColor: '#32373B',
          marginTop: '0'
        }}>
          <Toolbar variant="dense">
            <Typography variant="h6" style={{
              fontSize: '100%',
              color: '#F4D6CC'
            }}>
              BBALL 1v1
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}