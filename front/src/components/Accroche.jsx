import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import StepperAccroche from './StepperAccroche';
const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
        fontSize: '14px',
        marginTop: -30,
    },
    menuButton: {
        marginRight: -20,
        fontSize: '12px',
        marginTop: -30
    },
    bodyBar: {
        height: 30,
        paddingRight: 10,
    }
};

class Accroche extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <div>
                    <AppBar position="static" className={classes.bodyBar}>
                        <Toolbar>
                            <Typography variant="h6" color="inherit" className={classes.grow}>
                                Bonjour, identifiez vous
                        </Typography>
                            <Button color="inherit" className={classes.menuButton}>Login</Button>
                        </Toolbar>
                    </AppBar>
                </div>
                <div>
                    <StepperAccroche />
                </div>

            </div>

        );
    }
}

Accroche.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Accroche);
