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

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const stepperContent = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:
        'https://www.funeraire-info.fr/wp-content/uploads/2017/02/%C3%A9cologie.jpg',
    },
    {
      label: 'Bird',
      imgPath:
        'https://old.atomberg.com/wp-content/uploads/2016/04/energy_efficiency.jpg',
    },
    {
      label: 'Bali, Indonesia',
      imgPath:
        'https://www.corpgov.net/wp-content/uploads/2014/10/green-investing.jpeg',
    },
  ];
  
  const styles = theme => ({
    root: {
      maxWidth: 400,
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
      maxWidth: 400,
      overflow: 'hidden',
      display: 'block',
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
      </div>
    );
  }
}

StepperAccroche.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(StepperAccroche);