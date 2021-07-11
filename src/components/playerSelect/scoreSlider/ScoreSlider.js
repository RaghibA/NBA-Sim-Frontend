import useState from 'react'
import { Slider, Typography, withStyles } from '@material-ui/core'

function ScoreSlider() {

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
    <div style={{
      paddingTop: '1rem',
      marginInline: '20%'
    }}>

      <Typography style={{
        color: '#F4D6CC'
      }}>
        Score Limit:
      </Typography>

      <StyleSlider
        aria-labelledby="continuous-slider"
        gutterBottom
        valueLabelDisplay="auto"
        min={1}
        max={21} />

    </div>
  )
}

export default ScoreSlider