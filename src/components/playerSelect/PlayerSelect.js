// HEADER
import {React, useState} from "react"

// Material 
import { Divider, Button, makeStyles } from '@material-ui/core';

// Components
import PlayerChips from './playerChips/PlayerChips'
import ScoreSlider from './scoreSlider/ScoreSlider'


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

function PlayerSelect(props) {

  // Sim disabled 
  const [btnDisabled, setBtnDisabled] = useState(true)

  const classes = useStyles()

  return (
    <div>

      <h3 style={{
        textAlign: 'center',
        color: '#F4D6CC'
      }}>Select two players and a score limit to simulate a 1v1 game.</h3>

      <PlayerChips players={props.players} />

      <ScoreSlider />

      <div style={{
        textAlign: 'center'
      }}>

        <Button color="primary" variant="contained" disabled={btnDisabled}>
          START
        </Button>

      </div>

      <Divider light style={{
        marginBlock: '1rem'
      }} />

    </div>
  )
}

export default PlayerSelect