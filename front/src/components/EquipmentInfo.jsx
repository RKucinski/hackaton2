/*eslint-disable*/

import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import QrCodeScan from './QrCodeScan';
import EquipmentProgram from './EquipmentProgram';

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
      equipement:{
        type: '',
        brand: '',
        model: '',
      },
      checkedQrCode: false,
      equipments: [],
      days: []
    };
    this.getEquipments();
  }

  handleChange = event => {
    this.setState({ 
      equipement:{
        ...this.state.equipement,
        [event.target.name]: event.target.value,
      }
    });
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
    axios.get('/api/equipement/all').then(response => {
      this.setState({
        ...this.state,
        equipments: response.data,
      });
    });
  };

  displayEquipmentType = () => {
    let equipmentsType = [];
    this.state.equipments.map(equipment => {
      if(equipmentsType.indexOf(equipment.type) < 0) equipmentsType.push(equipment.type);
    })
    return equipmentsType.map(type => (
      <MenuItem value={type}>{type}</MenuItem>
    ))
  }

  displayEquipmentBrand = () => {
    let equipmentsBrand = [];
    this.state.equipments.map(equipment => {
      if(equipment.type === this.state.equipement.type) equipmentsBrand.push(equipment.brand);
    })
    return equipmentsBrand.map(brand => (
      <MenuItem value={brand}>{brand}</MenuItem>
    ))
  }

  displayEquipmentModel = () => {
    let equipmentsModel = [];
    this.state.equipments.map(equipment => {
      if(equipment.type === this.state.equipement.type && equipment.brand === this.state.equipement.brand) equipmentsModel.push(equipment.model);
    })
    return equipmentsModel.map(model => (
      <MenuItem value={model}>{model}</MenuItem>
    ))
  }

  submitEqpt = () => {
    this.props.history.push('/equipments')
  }

  render() {
    const { classes } = this.props;
    const { checkedQrCode } = this.state;

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
              value={this.state.equipement.type}
              onChange={this.handleChange}
              inputProps={{
                name: 'type',
                id: 'type-simple',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.displayEquipmentType()}
            </Select>
          </FormControl>
          {/* Marque de l'équipement */}
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="brand-simple">Marque</InputLabel>
            <Select
              value={this.state.equipement.brand}
              onChange={this.handleChange}
              inputProps={{
                name: 'brand',
                id: 'brand-simple',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.displayEquipmentBrand()}
            </Select>
          </FormControl>
          {/* Modèle de l'équipement */}
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="model-simple">Modèle</InputLabel>
            <Select
              value={this.state.equipement.model}
              onChange={this.handleChange}
              inputProps={{
                name: 'model',
                id: 'model-simple',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.displayEquipmentModel()}
            </Select>
          </FormControl>
        </form>
        <button onClick = {() => this.submitEqpt()}> Enregistrer </button>
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
