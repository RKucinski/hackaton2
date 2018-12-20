/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Components MaterialUi
import { BottomNavigation, BottomNavigationAction, Card, CardContent } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';

// Declaration style MaterialUI

const styles = {
	home: {
		display: 'flex',
		justifyContent: 'space-around',
	},
	card: {
		maxWidth: 320,
		position: 'fixed',
    top: 110,
    textAlign: 'center',
	},
	root: {
		width: 300,
	},
	Button: {
		backgroundColor: '#66cccc',
		marginLeft: 8,
		borderRadius: 10,
		height: 50,
		color: '#ffffff',
	},
};

// End Declaration

class NavBarSwitch extends Component {
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
				<Card className={classes.card}>
					<CardContent>
						<div className={classes.home}>
							<BottomNavigation
								value={value}
								onChange={this.handleChange}
								showLabels
								className={classes.root}
							>
								<BottomNavigationAction className={classes.Button} icon={<RestoreIcon />} />
								<BottomNavigationAction className={classes.Button} icon={<RestoreIcon />} />
								<BottomNavigationAction className={classes.Button} icon={<RestoreIcon />} />
							</BottomNavigation>
						</div>
						<h2>Title</h2>
						<p>
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
						</p>
					</CardContent>
				</Card>
			</div>
		);
	}
}

NavBarSwitch.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(NavBarSwitch);
