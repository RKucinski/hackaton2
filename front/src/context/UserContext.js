/* eslint-disable */
import React, { Component, createContext } from 'react';
import axios from 'axios';

export const UserContext = createContext({
  name: ''
});

export default class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: { key: "nope" }
    };
    this.getUser();
  }

  getUser = () => {
    axios.get('/api/user/5c1ba5d23ea7422e4139e5cb').then((response) => {
      this.setState({
        userData: response.data
      });
    });
  };





  render() {
    return <UserContext.Provider value={this.state}>{this.props.children}</UserContext.Provider>;
  }
}

export const withUser = Component => props => (
  <UserContext.Consumer>{value => <Component {...props} {...value} />}</UserContext.Consumer>
);