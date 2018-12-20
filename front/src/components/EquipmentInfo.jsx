/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class EquipmentInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { age, labelWidth } = this.state;
    return (
      <div className={classes.root}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={(ref) => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-native-simple"
          >
            Type
          </InputLabel>
          <Select
            native
            value={age}
            onChange={this.handleChange('age')}
            input={
              <OutlinedInput name="age" labelWidth={labelWidth} id="outlined-age-native-simple" />
            }
          >
            <option value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={(ref) => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-native-simple"
          >
            Marque
          </InputLabel>
          <Select
            native
            value={age}
            onChange={this.handleChange('age')}
            input={
              <OutlinedInput name="age" labelWidth={labelWidth} id="outlined-age-native-simple" />
            }
          >
            <option value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
      </div>
    );
  }
}

EquipmentInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EquipmentInfo);
