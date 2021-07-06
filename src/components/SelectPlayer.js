// HEADER
import React from "react"

// Material 
import { Chip, Divider, Slider, Typography, withStyles, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function SelectPlayer() {

  const classes = useStyles()
  
  const StyleChip = withStyles({
    root: {
      backgroundColor: '#F4D6CC',
      color: '#32373B',
      marginInline: '4px',
      marginBlock: '4px',
      '&:focus': {
        backgroundColor: '#7FD1B9',
      },
      '&:active': {
        backgroundColor: '#7FD1B9',
      }
    }
  })(Chip);

  const StyleSlider = withStyles({
    thumb: {
      color: '#7FD1B9'
    },
    track: {
      color: '#7FD1B9'
    },
    rail: {
      color: '#ECE2D0'
    }
  })(Slider)

  return (
      <div className="classes.root">

        <h3 style={{
          textAlign: 'center'
        }}>Select two players and a score limit to simulate a 1v1 game.</h3>

        <div style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginInline: '20%'
        }}>
        
          <StyleChip label="Lebron James" clickable onClick="" />
          <StyleChip label="Luka Doncic" clickable onClick="" />
          <StyleChip label="Kobe Bryant" clickable onClick="" />
          <StyleChip label="Steph Curry" clickable onClick="" />
          <StyleChip label="Giannis Antentokounmpo" clickable onClick="" />
          <StyleChip label="Russel Westbrook" clickable onClick="" />
          <StyleChip label="Michael Jordan" clickable onClick="" />
          <StyleChip label="Shaquille O'Neal" clickable onClick="" />
          
        </div>

        <div style={{
          paddingTop: '1rem',
          marginInline: '20%'
        }}>
          <Typography >
            Score Limit: {}
          </Typography>
        
          <StyleSlider
            id="discrete-slider"
            gutterBottom
            defaultValue={11}
            getAriaValueText={0}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            min={11}
            max={21}
            style={{
            
          }} />        
        </div>

        <Divider light style={{
          marginBlock: '1rem'
        }} />

      </div>
  )
}

