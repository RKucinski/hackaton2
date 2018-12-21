/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { List, Fab, Switch } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import QrCodeScan from './QrCodeScan';

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
		this.state = {
			checkedQrCode: false,
		};
	}

	renderEquipments = () => {
		axios.get();
	};
	handleChangeQrCode = () => {
		this.setState(state => ({ checkedQrCode: !state.checkedQrCode }));
		// mediaStream.stop();
	};

	render() {
		const { classes } = this.props;
		const { checkedQrCode } = this.state;
		return (
			<div className={classes.root}>
				<List component="nav">{this.renderEquipments()}</List>
				<Fab color="primary" aria-label="Add" className={classes.fab}>
					<Link to="/equipment/info">
						<AddIcon />
					</Link>
				</Fab>
				<Switch checked={checkedQrCode} onChange={this.handleChangeQrCode} aria-label="Collapse" />
				{this.state.checkedQrCode && <QrCodeScan />}
			</div>
		);
	}
}

Equipments.propTypes = {
	classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Equipments);
