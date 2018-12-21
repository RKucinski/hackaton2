/*eslint-disable*/

import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import EquipmentProgram from './EquipmentProgram';
import Axios from 'axios';
import QrCodeScan from './QrCodeScan';

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

class EquipmentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      marque: '',
      modele: '',
      checkedQrCode: false,
      equipments: [],
      days: []
    };
    this.getEquipments();
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  setDays = (newdata) => {
    this.setState({
      days: newdata
    })
  }
  handleChangeQrCode = () => {
    this.setState(state => ({ checkedQrCode: !state.checkedQrCode }));
    // mediaStream.stop();
  };

  getEquipments = () => {
    Axios.get('/api/equipement/all').then(response => {
      this.setState({
        ...this.state,
        equipments: response.data,
      });
    });
  };

  render() {
    const { classes } = this.props;
    const { type, marque, modele, checkedQrCode, equipments } = this.state;

    return (
      <React.Fragment>
      <div>
        <h2>Je souhaite scanner grâce aux QR codes</h2>
        <Switch checked={checkedQrCode} onChange={this.handleChangeQrCode} aria-label="Collapse" />
        {checkedQrCode && <QrCodeScan />}
        <h2>Je souhaite le faire manuelement</h2>
        <form className={classes.root} autoComplete="off">
          {/* Type de l'équipement */}
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="type-simple">Type</InputLabel>
            <Select
              value={type}
              onChange={this.handleChange}
              inputProps={{
                name: 'type',
                id: 'type-simple',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {equipments.map(equipment => (
                <MenuItem value={equipment.type}>{equipment.type}</MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* Marque de l'équipement */}
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="marque-simple">Marque</InputLabel>
            <Select
              value={marque}
              onChange={this.handleChange}
              inputProps={{
                name: 'marque',
                id: 'marque-simple',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          {/* Modèle de l'équipement */}
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="modele-simple">Modèle</InputLabel>
            <Select
              value={modele}
              onChange={this.handleChange}
              inputProps={{
                name: 'modele',
                id: 'modele-simple',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </form>
      </div>
        <div>
          <EquipmentProgram {...this.props} setDate={this.setDays} />
        </div>
      </React.Fragment>
    );
  }
}

EquipmentInfo.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(EquipmentInfo);
