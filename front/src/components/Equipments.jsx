import React, { Component } from 'react';

class Equipments extends Component {
  constructor(props){
    super(props);
    console.log("i'm in equipment");
  }
  render () {
    return (
      <div style={{ backgroundColor: 'red', width: '80vw', height: '10vh'}}>
        Mes équipements
      </div>
    )
  }
}

export default Equipments;
