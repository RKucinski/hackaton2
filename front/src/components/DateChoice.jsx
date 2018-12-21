import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

// const updateBegin = (e) => {
//   console.log(e.target.value)
// }
// const updateEnd = (e) => {
//   console.log(e.target.value)
// }

function TimePickers(props) {
  const { classes } = props;
  let horairesBegin = props.horaires.begin
  let horairesEnd = props.horaires.end

  const updateBegin = (e) => {
    horairesBegin = e.target.value
  }
  const updateEnd = (e) => {
    horairesEnd = e.target.value
  }

  return (
    <form className={classes.container} noValidate>
      <TextField
        style={{ width: "50%" }}
        id="time"
        label="Begin"
        type="time"
        defaultValue={horairesBegin}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}

        onChange={updateBegin}

        inputProps={{
          step: 300, // 5 min
        }}
      />
      <TextField
        id="time"
        label="End"
        type="time"
        defaultValue={horairesEnd}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}

        onChange={updateEnd}


        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
  );
}

TimePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimePickers);
