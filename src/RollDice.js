import React, { Component } from 'react';
import Die from './Die';
import { randRoll } from './Helper';

class RollDice extends Component {
  static defaultProps = {
    dice: [
      { id: 1, face: 'one', value: 1 },
      { id: 2, face: 'two', value: 2 },
      { id: 3, face: 'three', value: 3 },
      { id: 4, face: 'four', value: 4 },
      { id: 5, face: 'five', value: 5 },
      { id: 6, face: 'six', value: 6 }
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      numRoll: 0,
      die1: 'one',
      die1Val: 1,
      die2: 'one',
      die2Val: 1,
      total: 2
    };
    this.handleRoll = this.handleRoll.bind(this);
  }

  handleRoll() {
    randRoll(this.props.dice);
  }
  render() {
    return (
      <div>
        <div>
          <Die face={this.state.die1} />
          <Die face={this.state.die2} />
        </div>
        <button onClick={this.handleRoll}>Roll Dice</button>
      </div>
    );
  }
}

export default RollDice;
