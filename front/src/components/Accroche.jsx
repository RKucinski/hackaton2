/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import StepperAccroche from './StepperAccroche';
import InfoUser from './InfoUser';
const styles = {
	root: {
		flexGrow: 1,
	},
	grow: {
		flexGrow: 1,
		fontSize: '14px',
		marginTop: -30,
	},
	menuButton: {
		marginRight: -20,
		fontSize: '12px',
		marginTop: -30,
	},
	bodyBar: {
		height: 30,
		paddingRight: 10,
	},
};

class Accroche extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<InfoUser />
				<StepperAccroche />
			</div>
		);
	}
}

Accroche.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Accroche);
