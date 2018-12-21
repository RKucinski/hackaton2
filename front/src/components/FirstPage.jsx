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
  cardTips: {
		textAlign: 'center',
		marginTop: 10,
		maxWidth: 300,
	},
	media: {
		height: 100,
  },
  cardContainerTips: {
		marginTop: 25,
		display: 'flex',
		flexDirection: 'column',
		maxWidth: 370,
	},
};

class FirstPage extends Component {
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
				<Card xs={12} sm={12} className={classes.cardContainerTips}>
					<div className={classes.cardTips}>
						<Typography component="h5" variant="h5">
							Tips
						</Typography>
						<CardContent>
							<Typography>
								Tips Random
							</Typography>
						</CardContent>
					</div>
				</Card>
			</div>
		);
	}
}

FirstPage.propTypes = {
	classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(FirstPage);
