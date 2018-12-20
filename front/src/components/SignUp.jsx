/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
	TextField,
	Button,
	Snackbar,
	CardMedia,
	CardContent,
	Card,
} from '@material-ui/core';


// Css Material UI
const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginTop: theme.spacing.unit * 7,
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(350 + theme.spacing.unit * 3 * 2)]: {
			width: 350,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	card: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center !important',
		maxWidth: 350,
	},
	cardContainer: {
		display: 'flex',
		flexDirection: 'column',
		maxWidth: 350,
	},
	media: {
		height: 150,
	},
	button: {
		width: 100,
		marginBottom: 20,
		backgroundColor: '#66cccc',
	},
	root: {
		flexGrow: 1,
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
});

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			flash: '',
			open: false,
		};
		this.onChange = this.onChange.bind(this);
	}

	// Fonction du component

	handleSubmit = () => {
		fetch('/auth/signup', {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json',
			}),
			body: JSON.stringify(this.state),
		})
			.then(res => res.json())
			.then(
				res => this.setState({ flash: res.flash, open: true }),
				err => this.setState({ flash: err.flash, open: true })
			);

		window.location = '/profile';
	};

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleClose = (event, reason) => {
		this.setState({ open: false });
	};

	connect() {
		window.location = '/';
	}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<div className={classes.main}>
					<Card xs={12} sm={12} className={classes.cardContainer}>
						<CardMedia
							className={classes.media}
							image="http://image.noelshack.com/fichiers/2018/50/7/1544968644-submit.png"
							title="Image"
						/>
						<div className={classes.card}>
							<CardContent>
								<TextField
									type="email"
									name="email"
									label="E-mail"
									placeholder="E-mail"
									id="Email"
									onChange={this.onChange}
									value={this.state.email}
								/>
								<br />
								<br />
								<TextField
									type="password"
									name="password"
									id="Password"
									label="Mot de passe"
									placeholder="Mot de passe"
									onChange={this.onChange}
									value={this.state.password}
								/>
								<br />
								<br />
								<TextField
									type="password"
									name="verificationPassword"
									id="VerificationPassword"
									placeholder="Confirmation"
								/>
								<br />
								<br />
								
								<Snackbar
									open={this.state.open}
									autoHideDuration={4000}
									onClose={this.handleClose}
									message={<span>{this.state.flash}</span>}
								/>
							</CardContent>
							<Button
								variant="contained"
								color="primary"
								onClick={() => this.handleSubmit()}
								className={classes.button}
							>
								M'inscrire
							</Button>
						</div>
					</Card>
				</div>
			</div>
		);
	}
}

SignUp.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);
