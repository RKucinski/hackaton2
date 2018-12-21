import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
/*eslint-disable*/
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'

class DetailEquipment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedB: true,
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    console.log(this.props.item)
    const { checkedB } = this.state;
    return (
      <Grid container>
        <Grid item xs={9}>
          <ListItem button>
            <Link 
              to={{
                pathname: "/equipment/info",
                state: { details: this.props.item }
              }}
            >
              <ListItemText primary={this.props.item.equipmentID.type} />
            </Link>
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
