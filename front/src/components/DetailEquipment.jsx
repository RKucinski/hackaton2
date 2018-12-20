import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
/*eslint-disable*/

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
    const { checkedB } = this.state;
    return (
      <div>
        <ListItem button>
          <ListItemText primary="Machine à laver" />
        </ListItem>
        <Switch
          checked={checkedB}
          onChange={this.handleChange('checkedB')}
          value="checkedB"
          color="primary"
        />
      </div>
    );
  }
}

export default DetailEquipment;
