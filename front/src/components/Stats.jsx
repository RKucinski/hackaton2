/*eslint-disable*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
	card: {
		textAlign: 'center',
		marginTop: 60,
		maxWidth: 300,
	},
	media: {
		height: 100,
	},
};

class Stats extends Component {
	constructor(props) {
		super(props);
		this.state = {
			congel: true,
			machineAlaver: true,
			Wifi: true,
			computer: true,
			frigidaire: true,
		};
	}
	render() {
		const { classes } = this.props;
		return (
			<div>
				<Card className={classes.card}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Impact Economique
						</Typography>
					</CardContent>
					<CardMedia className={classes.media} image="https://via.placeholder.com/150" title="image" />
					<br />
					<Typography>
						legend
						<br />
						legend
					</Typography>
					<br />
				</Card>
				<Card className={classes.card}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h5">
							Impact Economique
						</Typography>
					</CardContent>
					<Typography>L’économie réalisé en moyenne par un français utilisant TheShiftApp est de</Typography>
					<br />
					<Typography>
						 763kW/h/an
						<br />
						 110€/an
						<br />
						 68,67 kg de CO2
						<br /> Environ 2 arbres sauvés !
					</Typography>
					<br />
				</Card>
				{this.state.congel && (
					<Card className={classes.card}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h5">
								Congel
							</Typography>
						</CardContent>
						<Typography>
							 326kW/h/an
							<br />
							 48€/an
							<br /> 29,34 kg de CO2 = 1 arbre
						</Typography>
						<br />
					</Card>
				)}
				{this.state.machineAlaver && (
					<Card className={classes.card}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h5">
								Machine à laver
							</Typography>
						</CardContent>
						<Typography>
							 230kW/h/an
							<br />
							34€/an
							<br /> 20,7 kg de CO2 = 1 arbre
						</Typography>
						<br />
					</Card>
				)}
				{this.state.Wifi && (
					<Card className={classes.card}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h5">
								Boîtier Wifi
							</Typography>
						</CardContent>
						<Typography>
							 197kW/h/an
							<br />
							 29€/an
							<br /> 17,73 kg de CO2 = 0.7 arbre
						</Typography>
						<br />
					</Card>
				)}
				{this.state.computer && (
					<Card className={classes.card}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h5">
								Ordinateur
							</Typography>
						</CardContent>
						<Typography>
							174kW/h/an
							<br />
							26€/an
							<br /> 15,66 kg de CO2 = 0.6 arbre
						</Typography>
						<br />
					</Card>
				)}
				{this.state.frigidaire && (
					<Card className={classes.card}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h5">
								Frigidaire
							</Typography>
						</CardContent>
						<Typography>
							 281kW/h/an
							<br />
							 41€/an
							<br />25,29 kg de CO2 = 1 arbre
						</Typography>
						<br />
					</Card>
				)}
				{/* Trouver une solution plus clean "vive les hackathons !!!" */}
				<br />
				<br />
				<br />
				<br />
				<br />
				{/* ...... */}
			</div>
		);
	}
}

Stats.propTypes = {
	classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Stats);
