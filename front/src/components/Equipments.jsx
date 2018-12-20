import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import DetailEquipment from './DetailEquipment';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class Equipments extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List component="nav">
          <DetailEquipment />
        </List>
      </div>
    );
  }
}

Equipments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Equipments);
