import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

class DetailEquipment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedB: true,
    };
  }

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { checkedB } = this.state;
    return (
      <Grid container>
        <Grid item xs={9}>
          <ListItem button>
            <ListItemText primary="Machine à laver" />
          </ListItem>
        </Grid>
        <Grid item xs={3}>
          <Switch
            checked={checkedB}
            onChange={this.handleChange('checkedB')}
            value="checkedB"
            color="primary"
          />
        </Grid>
      </Grid>
    );
  }
}

export default DetailEquipment;
