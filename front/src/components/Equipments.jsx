/* eslint-disabled */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { List, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import DetailEquipment from './DetailEquipment';
// import BottomNav from './BottomNav';
import { withUser } from '../context/UserContext';
import days from './dataEnDur'


const styles = theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	fab: {
		margin: theme.spacing.unit,
		backgroundColor: '#66cccc',
	},
	extendedIcon: {
		position: 'fixed',
		top: 100,
		marginRight: theme.spacing.unit,
	},
	button: {
		position: 'fixed',
		top: 190,
		minWidth: 30,
		backgroundColor: '#66cccc',
	},
});

class Equipments extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	displayEquipment = (itemsArray) => {
		const array = [];
		itemsArray.map((item) => {
			array.push(<DetailEquipment item={item} />);
		});
		return array;
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<List component="nav">
					{this.props.userData.key === 'nope'
						? console.log(`ternaire${this.props.userData}`)
						: this.displayEquipment(this.props.userData.equipment)}
				</List>
				<Link
					to={{
						pathname: "/equipment/info",
						state: { details: days }
					}}>
				<Fab color="primary" aria-label="Add" className={classes.fab}>
					<AddIcon />
				</Fab>
				</Link>
			</div >
		);
	}
}

Equipments.propTypes = {
	classes: PropTypes.shape({}).isRequired,
};

export default withUser(withStyles(styles)(Equipments));
