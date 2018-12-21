/*eslint-disable*/
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import CardMedia from '@material-ui/core/CardMedia';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Link } from 'react-router-dom';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const stepperContent = [
    {
      label: 'Réduisez vos dépenses en éléctricté !',
      imgPath:
        'http://image.noelshack.com/fichiers/2018/51/5/1545390319-euro.png',
  
    },
    {
      label: 'Tout en pensant à la planète !',
      imgPath:
      'http://image.noelshack.com/fichiers/2018/51/5/1545390316-planet-earth.png',
    },
    {
      label: 'HomEco vous accompagne dans votre sobriété numérique !',
      imgPath:
        'http://image.noelshack.com/fichiers/2018/51/5/1545390313-plug.png',
    },
  ];
  
  const styles = theme => ({
    root: {
      margin: 'auto',
      maxWidth: 300,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      flexGrow: 1,
    },
    rootBis: {
      margin: 'auto',
      maxWidth: 300,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      flexGrow: 1,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing.unit * 4,
      backgroundColor: theme.palette.background.default,
    },
    img: {
      maxHeight: 255,
      marginBottom:25,
      maxWidth: 400,
      overflow: 'hidden',
      display: 'block',
    },
    media: {
      marginTop: 30,
      marginBottom: -90,
      height: 210,
    },
    button: {
      width: 100,
      marginBottom: 20,
      backgroundColor: '#38b301',
    },
    link: {
      textDecoration: 'none',
    },
  });

class StepperAccroche extends Component {
 
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };



  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = stepperContent.length;
    const stepsProgress = stepperContent.length-1;

    console.log(stepperContent)

    return (
      <div className={classes.root}>
      <CardMedia className={classes.media} image="http://image.noelshack.com/fichiers/2018/51/5/1545391890-logo-titre.png" title="image" />
      <br/>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {stepperContent.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.imgPath} alt={step.label} />
              ) : null}
            </div> 
          ))}
        </AutoPlaySwipeableViews>
        <Paper square elevation={0} className={classes.header}>
          <Typography>{stepperContent[activeStep].label}</Typography>
        </Paper>
        <MobileStepper
          variant="progress"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === stepsProgress}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
        <div className={classes.rootBis}>
        {activeStep === 2 ? 
            <Link to = '/signUp' className={classes.link}>
            <Button
								variant="contained"
								color="primary"
								className={classes.button}
							>
								M'inscrire
							</Button>
              </Link> : null
          }
          </div>
      </div>
    );
  }
}

StepperAccroche.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(StepperAccroche);