import React, { Component } from "react";
import Letter from "./Letter";

class Letters extends Component {
  AllLetters(params) {
    let arrayOfLetters = [];
    for (let key in params) {
      arrayOfLetters.push(key);
    }
    return arrayOfLetters;
  }
  render() {
    return (
      <div id="buttonOfletter">
        <h5>Hint is: {this.props.hint}</h5>
        {this.AllLetters(this.props.allLetters).map((letter) => {
          return (
            <Letter
              deleteTheLetter={this.props.deleteTheLetter}
              char={letter}
              value={this.props.allLetters[letter]}
              solution={this.props.solution}
              increaseScore={this.props.increaseScore}
              decreaseScore={this.props.decreaseScore}
            />
          );
        })}
      </div>
    );
  }
}
export default Letters;
