import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import getHabbits from './Questionnaire_function';
// import { bool } from 'prop-types';
/* eslint-disable */

class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home:{
        house: true,
        people: 0,
        surface: 0,
        heatingSystem: '',
        waterSystem: '',
        habbits: [],
      },
      buttonDisplay: false,
    }
    this.selectedDays = [];
  }

  updateHouse = (valueToUpdate, newValue) => {
    console.log(valueToUpdate, newValue)
    this.setState({
      home:{
        ...this.state.home,
        [valueToUpdate]: newValue,
      }
    })
  }

  toggleButtonsDay = () => {
    this.setState({
      buttonDisplay: !this.state.buttonDisplay
    })
  }

  selectDay = (daySelected) => {
    this.selectedDays.push(daySelected);
    const habbits = getHabbits(this.selectedDays);
    this.updateHouse('habbits', habbits);
  }

  updateHabits = (days) => {
    const habbits = getHabbits(days);
    this.updateHouse('habbits', habbits);
  }

  render () {
      return (
      <Grid container>
        <Grid item xs={12} style={{ marginTop: '10vh', textAlign: 'center', fontSize: '0.8em' }}>
          Vous vivez dans :
        </Grid>
        <Grid item xs={6} style={{ marginTop: '1vh', textAlign: 'center', fontSize: '0.8em' }}>
          <button onClick={() => this.updateHouse('house', false)}> Un appartement </button>
        </Grid>
        <Grid item xs={6} style={{ marginTop: '1vh', textAlign: 'center', fontSize: '0.8em' }}>
          <button onClick={() => this.updateHouse('house', true)}> Une maison </button>
        </Grid>
        <Grid item xs={6} style={{ marginTop: '2vh', textAlign: 'center', fontSize: '0.8em' }}>
          Surface : 
        </Grid>
        <Grid item xs={6} style={{ marginTop: '2vh', textAlign: 'center' }}>
          <input
            onChange={(e) => this.updateHouse('surface', e.target.value)}
            placeholder="Surface en m²"
          />
        </Grid>
        <Grid item xs={6} style={{ marginTop: '2vh', textAlign: 'center', fontSize: '0.8em' }}>
          Personnes : 
        </Grid>
        <Grid item xs={6} style={{ marginTop: '2vh', textAlign: 'center' }}>
          <input
                onChange={(e) => this.updateHouse('people', e.target.value)}
                placeholder="Nombre de personnes"
              />
        </Grid>
        <Grid item xs={12} style={{ marginTop: '2vh', textAlign: 'center', fontSize: '0.8em' }}>
          La semaine, êtes vous chez vous en journée ?
        </Grid>
        <Grid item xs={6} style={{ marginTop: '1vh', textAlign: 'center' }}>
          <button onClick={() => this.updateHabits()}> Non </button>
        </Grid>
        <Grid item xs={6} style={{ marginTop: '1vh', textAlign: 'center' }}>
          <button onClick={() => this.toggleButtonsDay()}> Oui </button>
        </Grid>
        {this.state.buttonDisplay ? 
        <Grid item xs={12} style = {{ marginTop: '2vh', textAlign: 'center'}}>
          <button onClick={() => this.selectDay('Monday')}> Lundi </button>
          <button onClick={() => this.selectDay('Tuesday')}> Mardi </button>
          <button onClick={() => this.selectDay('Wednesday')}> Mercredi </button>
          <button onClick={() => this.selectDay('Thursday')}> Jeudi </button>
          <button onClick={() => this.selectDay('Friday')}> Vendredi </button>
        </Grid>
        : <div />}
        <Grid item xs={12} style={{ marginTop: '2vh', textAlign: 'center', fontSize: '0.8em' }}>
          Système de chauffage :
        </Grid>
        <Grid item xs={12} style = {{ marginTop: '1vh', textAlign: 'center'}}>
          <button onClick={() => this.updateHouse('heatingSystem', 'Gaz')}> Gaz </button>
          <button onClick={() => this.updateHouse('heatingSystem', 'Electrique')}> Electrique </button>
          <button onClick={() => this.updateHouse('heatingSystem', 'Fioul')}> Fioul </button>
        </Grid>
        <Grid item xs={12} style={{ marginTop: '2vh', textAlign: 'center', fontSize: '0.8em' }}>
          Production eau chaude :
        </Grid>
        <Grid item xs={12} style = {{ marginTop: '1vh', textAlign: 'center'}}>
          <button onClick={() => this.updateHouse('waterSystem', 'Gaz')}> Gaz </button>
          <button onClick={() => this.updateHouse('waterSystem', 'Electrique')}> Electrique </button>
          <button onClick={() => this.updateHouse('waterSystem', 'Fioul')}> Fioul </button>
        </Grid>
        <Grid item xs={6} style={{ marginTop: '2vh', textAlign: 'center', fontSize: '0.8em' }}>
          Fournisseur :
        </Grid>
        <Grid item xs={6} style = {{ marginTop: '2vh', textAlign: 'center'}}>
          <select>
            <option />
            <option> EDF </option>
            <option> Direct Energie </option>
            <option> Alterna </option>
            <option> Engie </option>
          </select>
        </Grid>
      </Grid>
    )
  }
}

export default Questionnaire;
