import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { withUser } from '../context/UserContext';
import DateChoice from './DateChoice';


function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
});


class FullWidthTabs extends React.Component {
  state = {
    value: 0,
    days: [],
  };


  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  setthesedays = (days) =>{
    this.setState({ days: days})
  }

  displayDays = (daysArray) => {
    const theme = this.props
    const setDate = (this.props.setDate)
    let array = []
    daysArray.map((item, i) => {
      array.push(
        <TabContainer key={i} dir={theme.direction} horaires={item}>

          {console.log(item)}
          {console.log(item.day)}
          {/* {this.setthesedays(item)} */}

          {item.plages.map(
            x => {
              return <DateChoice horaires={x} />
            }
          )}

        </TabContainer>)
    })
    return array
  }

  render() {
    const { classes, theme } = this.props;
    console.log(this.props)
    const days = this.props.location.state.details.programID.days
    console.log(days)
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="L" />
            <Tab label="M" />
            <Tab label="M" />
            <Tab label="J" />
            <Tab label="V" />
            <Tab label="S" />
            <Tab label="D" />

          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >

          {this.displayDays(days)}

        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withUser(withStyles(styles, { withTheme: true })(FullWidthTabs));
