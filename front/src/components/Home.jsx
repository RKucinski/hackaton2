/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Components MaterialUi
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


// Declaration style MaterialUI

const styles = {
  home: {
    display: 'flex',
    justifyContent: 'space-around',
  },

  root: {
    position: 'fixed',
    bottom: 5,
    width: 350,
  },
};

// End Declaration

class Home extends Component {
  constructor(props) {
		super(props);
		this.state = {
      value: 0,
    };
  }
  
  // Function MaterialUI

  handleChange = (event, value) => {
    this.setState({ value });
  };

  // End Function

  render() {

    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.home}>
        <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
      </div>
    );
  }
}

Home.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(Home);