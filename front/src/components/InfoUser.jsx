/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = {
	root: {
		position: 'fixed',
		top: 0,
		width: 360,
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
		color: '#ffffff',

	},
	bodyBar: {
		height: 30,
		paddingRight: 10,
		backgroundColor: '#38b301',
	},
	link: {
		textDecoration: 'none',
	},
};

class InfoUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nameUser: 'Stephane Dupont',
		};
	}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<AppBar position="static" className={classes.bodyBar}>
					<Toolbar>
						<Typography variant="h6" color="inherit" className={classes.grow}>
							{this.state.nameUser}
						</Typography>
						<Link to="/auth" className={classes.link}>
							<Button color="inherit" className={classes.menuButton}>
								Déconnexion
							</Button>
						</Link>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

InfoUser.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoUser);
