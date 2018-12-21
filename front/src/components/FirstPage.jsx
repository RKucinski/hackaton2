/*eslint-disable*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../css/firstPage.css';

const styles = {
	card: {
		textAlign: 'center',
		marginTop: 90,
		maxWidth: 300,
	},
	cardTips: {
		textAlign: 'center',
		marginTop: 10,
		maxWidth: 300,
	},
	media: {
		height: 300,
	},
	cardContainerTips: {
		marginTop: 35,
		display: 'flex',
		flexDirection: 'column',
		maxWidth: 370,
	},
	link: {
		textDecoration: 'none',
	},
	button: {
		width: 100,
		marginTop: 10,
		marginBottom: 10,
		backgroundColor: '#38b301',
	},
};

class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedMore: false,
      tips: [
        'Même en veille votre box Internet peut consommer jusqu’à 200kWh/an, pensez à l’éteindre et économisez jusque 30€ !',
        'Optez pour des programmes en machine en cycle court vous permettra d’économiser entre 5 et 10€ par an !',
        'Dégivrez votre réfrigérateur avant que la couche de givre n’atteigne 3mm vous permettra d’économiser jusqu’à 30% votre consommation d’électricité !',
        `Le saviez-vous ? Une utilisation quotidienne de l'application HomEco vous permet d'économiser jusqu'à 7% sur votre facture d'électricité.`,
        `85% des utilisateurs HomEco se sentent plus impliqués dans la sobriété numérique.`,
      ],
      selectedTips: '',
    };
  }
  handleMore = () => {
    this.setState(state => ({ checkedMore: !state.checkedMore }));
  };

  componentDidMount = () => {
    this.getRamdomTips();
  };

  getRamdomTips = () => {
    this.setState({
      ...this.state,
      selectedTips: this.state.tips[Math.floor(Math.random() * 4)],
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.state.checkedMore ? null : (
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Impact Economique
              </Typography>
            </CardContent>
            <CardMedia
              className={classes.media}
              image="https://img.lght.pics/Drmu.png"
              title="image"
            />
            <br />
            <Typography>
              <span className="Conso">Consommation éléctrique</span>
              <br />
              <span className="Economie">Economie possible</span>
            </Typography>

            <Button
              variant="contained"
              color="primary"
              onClick={() => this.handleMore()}
              className={classes.button}
            >
              More
            </Button>

            <br />
          </Card>
        )}
        {this.state.checkedMore && (
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5">
                Impact Economique
              </Typography>
            </CardContent>
            <Typography>
              L’économie réalisé en moyenne par un français utilisant TheShiftApp est de
            </Typography>
            <br />
            <Typography>
              * 763kW/h/an
              <br />
              * 110€/an
              <br />
              * 68,67 kg de CO2
              <br />* Environ 2 arbres sauvés !
            </Typography>

            <Button
              variant="contained"
              color="primary"
              onClick={() => this.handleMore()}
              className={classes.button}
            >
              Back
            </Button>

            <br />
          </Card>
        )}
        <Card xs={12} sm={12} className={classes.cardContainerTips}>
          <div className={classes.cardTips}>
            <Typography component="h5" variant="h5">
              Tips
            </Typography>
            <CardContent>
              <Typography>{this.state.selectedTips}</Typography>
            </CardContent>
          </div>
        </Card>
        <br/> <br/> <br/>  <br/> <br/> <br/> 
      </div>
    );
  }
}

FirstPage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(FirstPage);
