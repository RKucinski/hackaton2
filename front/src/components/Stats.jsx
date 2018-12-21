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
	render() {
		const { classes } = this.props;
		return (
			<div>
				<Card className={classes.card}>
					<CardMedia className={classes.media} image="https://via.placeholder.com/150" title="image" />
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Impact Economique
						</Typography>
						<Typography component="p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua.
						</Typography>
					</CardContent>
				</Card>
				<Card className={classes.card}>
					<CardMedia className={classes.media} image="https://via.placeholder.com/150" title="image" />
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Impact Ecologique
						</Typography>
						<Typography component="p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua.
						</Typography>
					</CardContent>
				</Card>
				<Card className={classes.card}>
					<CardMedia className={classes.media} image="https://via.placeholder.com/150" title="image" />
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Solution Tips
						</Typography>
						<Typography component="p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua.
						</Typography>
					</CardContent>
				</Card>
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
