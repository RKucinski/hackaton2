/* eslint-disabled */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DetailEquipment from './DetailEquipment';
import BottomNav from './BottomNav';
import { withUser } from '../context/UserContext';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class Equipments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapsList: [],
    };
  }

  displayEquipment = (itemsArray) => {
    let array = []
    itemsArray.map(item => {
      array.push(<DetailEquipment item={item} />)
    })
    return array
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List component="nav">
          {(this.props.userData.key === "nope") ? console.log('ternaire' + this.props.userData) : this.displayEquipment(this.props.userData.equipment)}
        </List>
        <Fab color="primary" aria-label="Add" className={classes.fab}>
          <AddIcon />
        </Fab>
        <BottomNav />
      </div>
    );
  }
}

Equipments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withUser(withStyles(styles)(Equipments));

