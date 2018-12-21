/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField, CardContent, Card, Typography, Fade, Switch, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

// Css Material UI
const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginTop: theme.spacing.unit * 7,
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(370 + theme.spacing.unit * 3 * 2)]: {
			width: 370,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	card: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center !important',
		maxWidth: 370,
		marginTop: 10,
	},
	button: {
		minWidth: 1,
		backgroundColor: '#66cccc',
	},
	cardContainer: {
		marginTop: 25,
		display: 'flex',
		flexDirection: 'column',
		maxWidth: 370,
	},
	grow: {
		flexGrow: 1,
	},
	link: {
		textDecoration: 'none',
	},
	switch: {
		height: 180,
  },
  link: {
		textDecoration: 'none',
	},
});

class ParamsUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: 'test@gmail.com',
			password: '********',
			emailTMP: '',
			passwordTMP: '',
			checkedEmail: false,
			checkedPassword: false,
		};
		this.onChange = this.onChange.bind(this);
	}

	// Fonction du component

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleChangeEmail = () => {
		this.setState(state => ({ checkedEmail: !state.checkedEmail }));
	};

	handleChangePassword = () => {
		this.setState(state => ({ checkedPassword: !state.checkedPassword }));
	};

	handleChangeEmailUser = () => {
		this.setState(state => ({
			checkedEmail: !state.checkedEmail,
			email: this.state.emailTMP,
		}));
	};

	handleChangePasswordUser = () => {
		this.setState(state => ({
			checkedPassword: !state.checkedPassword,
			password: this.state.passwordTMP,
		}));
	};

	render() {
		const { classes } = this.props;
		const { checkedEmail, checkedPassword } = this.state;

		return (
			<div className={classes.main}>
				<Card xs={12} sm={12} className={classes.cardContainer}>
					<div className={classes.card}>
						<Typography component="h1" variant="h5">
							Profil
						</Typography>
						<CardContent>
							{this.state.password && (
								<Typography className={classes.emailActual}>{this.state.email}</Typography>
							)}
							<Fade in={checkedEmail}>
								<TextField
									type="email"
									name="emailTMP"
									placeholder="E-mail"
									id="Email"
									onChange={this.onChange}
									value={this.state.emailTMP}
								/>
							</Fade>
							<Switch checked={checkedEmail} onChange={this.handleChangeEmail} aria-label="Collapse" />
							<Fade in={checkedEmail}>
								<Button
									variant="contained"
									color="primary"
                  className={classes.button}
                  onClick={() => this.handleChangeEmailUser()}
								>
									V
								</Button>
							</Fade>
						</CardContent>
						<CardContent>
							{this.state.password && (
								<Typography className={classes.passwordActual}>{this.state.password}</Typography>
							)}
							<Fade in={checkedPassword}>
								<TextField
									type="password"
									name="passwordTMP"
									id="Password"
									placeholder="Mot de passe"
									onChange={this.onChange}
									value={this.state.passwordTMP}
								/>
							</Fade>
							<Switch
								checked={checkedPassword}
								onChange={this.handleChangePassword}
								aria-label="Collapse"
							/>
							<Fade in={checkedPassword}>
								<Button
									variant="contained"
									color="primary"
									onClick={() => this.handleChangePasswordUser()}
									className={classes.button}
								>
									V
								</Button>
							</Fade>
						</CardContent>
					</div>
				</Card>
				<Card xs={12} sm={12} className={classes.cardContainer}>
					<div className={classes.card}>
						<Typography component="h5" variant="h5">
							Repasser le test
						</Typography>
						<CardContent>
            <Link to="/Answer" className={classes.link}>
							<Button
								variant="contained"
								color="primary"
								className={classes.button}
							>
								Let'Go !
							</Button>
              </Link>
						</CardContent>
					</div>
				</Card>
			</div>
		);
	}
}

ParamsUser.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ParamsUser);
