import React, { Component } from 'react';
import Die from './Die';
import { randRoll } from './Helper';
import './RollDice.css';

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
    const newRoll = randRoll(this.props.dice);
    const totalRoll = newRoll.reduce((total, die) => total + die.value, 0);
    this.setState(st => ({
      numRoll: st.numRoll + 1,
      die1: newRoll[0].face,
      die1Val: newRoll[0].value,
      die2: newRoll[1].face,
      die2Val: newRoll[1].value,
      total: totalRoll
    }));
  }
  render() {
    return (
      <div className="RollDice-Container">
        <div className="Die-Container">
          <Die face={this.state.die1} />
          <Die face={this.state.die2} />
        </div>
        {this.state.die1 === this.state.die2 && (
          <p>DOUBLES!!! YOU GET ANOTHER ROLL</p>
        )}
        <div className="Dice-Counter">
          <h4>
            Rolls: <span>{this.state.numRoll}</span>
          </h4>
          <h4>
            Die 1: <span>{this.state.die1Val}</span>
          </h4>
          <h4>
            Die 2: <span>{this.state.die2Val}</span>
          </h4>
          <h4>
            Total: <span>{this.state.total}</span>
          </h4>
        </div>
        <button onClick={this.handleRoll}>Roll Dice</button>
      </div>
    );
  }
}

export default RollDice;
