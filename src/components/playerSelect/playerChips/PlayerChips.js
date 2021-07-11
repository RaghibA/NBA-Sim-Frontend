import { Chip, withStyles } from '@material-ui/core'

function PlayerChips(props) {

  //! Look up chip array

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

  return (
    <div style={{
      alignItems: 'center',
      justifyContent: 'center',
      marginInline: '20%'
    }}>

      <StyleChip label={props.players[0].name} clickable onClick="" />
      <StyleChip label="Luka Doncic" clickable onClick="" />
      <StyleChip label="Kobe Bryant" clickable onClick="" />
      <StyleChip label="Steph Curry" clickable onClick="" />
      <StyleChip label="Giannis Antentokounmpo" clickable onClick="" />
      <StyleChip label="Russel Westbrook" clickable onClick="" />
      <StyleChip label="Michael Jordan" clickable onClick="" />
      <StyleChip label="Shaquille O'Neal" clickable onClick="" />

    </div>
  )
}

export default PlayerChips