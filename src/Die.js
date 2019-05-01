import React, { Component } from 'react';
import './Die.css';
import RollDice from './RollDice';

class Die extends Component {
  render() {
    return (
      <div>
        <i className={` Die fas fa-dice-${this.props.face}`} />
      </div>
    );
  }
}

export default Die;
