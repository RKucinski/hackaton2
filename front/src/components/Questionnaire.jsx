/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bool } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, CardMedia, CardContent, Card, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import getHabbits from './Questionnaire_function';

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
    marginTop: 30,
    marginBottom: -200,
    height: 225,
  },
	button: {
		width: 50,
    marginBottom: 10,
    marginLeft: 10,
    backgroundColor: '#74a72b',
    fontSize: 8,
    color: '#ffffff'
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
	link: {
		textDecoration: 'none',
	},
});

class Questionnaire extends Component {
	constructor(props) {
		super(props);
		this.state = {
			home: {
				house: true,
				people: 0,
				surface: 0,
				heatingSystem: '',
				waterSystem: '',
				habbits: [],
			},
			buttonDisplay: false,
		};
		this.selectedDays = [];
	}

	updateHouse = (valueToUpdate, newValue) => {
		console.log(valueToUpdate, newValue);
		this.setState({
			home: {
				...this.state.home,
				[valueToUpdate]: newValue,
			},
		});
	};

	toggleButtonsDay = () => {
		this.setState({
			buttonDisplay: !this.state.buttonDisplay,
		});
	};

	selectDay = daySelected => {
		this.selectedDays.push(daySelected);
		const habbits = getHabbits(this.selectedDays);
		this.updateHouse('habbits', habbits);
	};

	updateHabits = days => {
		const habbits = getHabbits(days);
		this.updateHouse('habbits', habbits);
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<div className={classes.main}>
					<Card xs={12} sm={12} className={classes.cardContainer}>
						<CardMedia
							className={classes.media}
							image="http://image.noelshack.com/fichiers/2018/51/5/1545391890-logo-titre.png"
							title="Image"
						/>
						<div className={classes.card}>
							<CardContent>
								<Grid container>
									<Grid
										item
										xs={12}
										style={{ marginTop: '10vh', textAlign: 'center', fontSize: '0.8em' }}
									>
										Vous vivez dans :
									</Grid>
									<Grid
										item
										xs={6}
										style={{ marginTop: '1vh', textAlign: 'center', fontSize: '0.8em' }}
									>
										<Button className={classes.button} onClick={() => this.updateHouse('house', false)}>
											{' '}
											Un appartement{' '}
										</Button>
									</Grid>
									<Grid
										item
										xs={6}
										style={{ marginTop: '1vh', textAlign: 'center', fontSize: '0.8em' }}
									>
										<Button  className={classes.button} onClick={() => this.updateHouse('house', true)}> Une maison </Button>
									</Grid>
									<Grid
										item
										xs={6}
										style={{ marginTop: '2vh', textAlign: 'center', fontSize: '0.8em' }}
									>
										Surface :
									</Grid>
									<Grid item xs={6} style={{ marginTop: '2vh', textAlign: 'center' }}>
										<input
											onChange={e => this.updateHouse('surface', e.target.value)}
											placeholder="Surface en m²"
										/>
									</Grid>
									<Grid
										item
										xs={6}
										style={{ marginTop: '2vh', textAlign: 'center', fontSize: '0.8em' }}
									>
										Personnes :
									</Grid>
									<Grid item xs={6} style={{ marginTop: '2vh', textAlign: 'center' }}>
										<input
											onChange={e => this.updateHouse('people', e.target.value)}
											placeholder="Nombre de personnes"
										/>
									</Grid>
									<Grid
										item
										xs={12}
										style={{ marginTop: '2vh', textAlign: 'center', fontSize: '0.8em' }}
									>
										La semaine, êtes vous chez vous en journée ?
									</Grid>
									<Grid item xs={6} style={{ marginTop: '1vh', textAlign: 'center' }}>
										<Button onClick={() => this.updateHabits()}> Non </Button>
									</Grid>
									<Grid item xs={6} style={{ marginTop: '1vh', textAlign: 'center' }}>
										<Button className={classes.button} onClick={() => this.toggleButtonsDay()}> Oui </Button>
									</Grid>
									{this.state.buttonDisplay ? (
										<Grid item xs={12} style={{ marginTop: '2vh', textAlign: 'center' }}>
											<Button onClick={() => this.selectDay('Monday')}> Lundi </Button>
											<Button onClick={() => this.selectDay('Tuesday')}> Mardi </Button>
											<Button onClick={() => this.selectDay('Wednesday')}> Mercredi </Button>
											<Button onClick={() => this.selectDay('Thursday')}> Jeudi </Button>
											<Button onClick={() => this.selectDay('Friday')}> Vendredi </Button>
										</Grid>
									) : (
										<div />
									)}
									<Grid
										item
										xs={12}
										style={{ marginTop: '2vh', textAlign: 'center', fontSize: '0.8em' }}
									>
										Système de chauffage :
									</Grid>
									<Grid item xs={12} style={{ marginTop: '1vh', textAlign: 'center' }}>
										<Button className={classes.button} onClick={() => this.updateHouse('heatingSystem', 'Gaz')}> Gaz </Button>
										<Button className={classes.button} onClick={() => this.updateHouse('heatingSystem', 'Electrique')}>
											{' '}
											Electrique{' '}
										</Button>
										<Button className={classes.button} onClick={() => this.updateHouse('heatingSystem', 'Fioul')}>
											{' '}
											Fioul{' '}
										</Button>
									</Grid>
									<Grid
										item
										xs={12}
										style={{ marginTop: '2vh', textAlign: 'center', fontSize: '0.8em' }}
									>
										Production eau chaude :
									</Grid>
									<Grid item xs={12} style={{ marginTop: '1vh', textAlign: 'center' }}>
										<Button className={classes.button} onClick={() => this.updateHouse('waterSystem', 'Gaz')}> Gaz </Button>
										<Button className={classes.button} onClick={() => this.updateHouse('waterSystem', 'Electrique')}>
											{' '}
											Electrique{' '}
										</Button>
										<Button className={classes.button} onClick={() => this.updateHouse('waterSystem', 'Fioul')}>
											{' '}
											Fioul{' '}
										</Button>
									</Grid>
									<Grid
										item
										xs={6}
										style={{ marginTop: '2vh', textAlign: 'center', fontSize: '0.8em' }}
									>
										Fournisseur :
									</Grid>
									<Grid item xs={6} style={{ marginTop: '2vh', textAlign: 'center', backgroundColor: '#ECE8E1' }}>
										<select>
											<option />
											<option> EDF </option>
											<option> Direct Energie </option>
											<option> Alterna </option>
											<option> Engie </option>
										</select>
									</Grid>
								</Grid>
							</CardContent>
							<Link to="/Home" className={classes.link}>
								<Button variant="contained" color="primary" className={classes.button}>
									Soumettre
								</Button>
							</Link>
						</div>
					</Card>
          <br/><br/><br/>
				</div>
			</div>
		);
	}
}

Questionnaire.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Questionnaire);
