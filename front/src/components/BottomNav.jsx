/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Components MaterialUi
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Timeline from '@material-ui/icons/Timeline';
import Weekend from '@material-ui/icons/Weekend';
import Settings from '@material-ui/icons/Settings';
import Equipments from './Equipments';
import ParamsUser from './ParamsUser';
import Stats from './Stats';

// Declaration style MaterialUI

const styles = {
	home: {
		display: 'flex',
		justifyContent: 'space-around',
	},

	root: {
		position: 'fixed',
		bottom: 0,
		heigth: 25,
		width: 350,
	},
};

// End Declaration

class BottomNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
			stats: true,
			equipments: false,
			params: false,
		};
	}

	// Function MaterialUI

	handleChange = (event, value) => {
		this.setState({ value });
	};

// Function change view page Home with the BottomNavSwitch : Page Stats

	handleClick = (value) => {
		this.setState({
			stats: false,
			params: false,
			equipments: false,
			[value]: true,
		})
	}

	render() {
		const { classes } = this.props;
		const { value } = this.state;

		return (
			<div className={classes.home}>
				{this.state.stats && <Stats />}
				{this.state.equipments && <Equipments />}
				{this.state.params && <ParamsUser />}
				<BottomNavigation value={value} onChange={this.handleChange} showLabels className={classes.root}>
					<BottomNavigationAction  onClick={()=>this.handleClick('stats')} label="Stats" icon={<Timeline />} />
					<BottomNavigationAction onClick={()=>this.handleClick('equipments')} label="Equipment" icon={<Weekend />} />
					<BottomNavigationAction onClick={()=>this.handleClick('params')} label="Params" icon={<Settings />} />
				</BottomNavigation>
			</div>
		);
	}
}

BottomNav.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(BottomNav);
