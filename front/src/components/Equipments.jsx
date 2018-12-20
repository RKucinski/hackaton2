import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import DetailEquipment from './DetailEquipment';
import BottomNav from './BottomNav';

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
    this.state = {};
  }

  renderEquipments = () => {
    axios.get()
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List component="nav">
          {this.renderEquipments()}
        </List>
        <Fab color="primary" aria-label="Add" className={classes.fab}>
          <Link to="/equipment/info">
            <AddIcon />
          </Link>
        </Fab>
        <BottomNav />
      </div>
    );
  }
}

Equipments.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Equipments);
