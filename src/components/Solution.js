import React, { Component } from "react";
class Solution extends Component {
  constructor() {
    super();
    this.solved = [];
  }
  arrayOfSelution(solution) {
    return solution.split("");
  }
  pushTheSolution = (solution) => {};
  win = (letterSolved) => {
    if (letterSolved == this.props.solution.length) {
      return <h1 id="win">YOU WIN</h1>;
    } else if (this.props.score <= 0) {
      return <h1 id="lost">YOU LOST</h1>;
    }
  };
  render() {
    let letterSolved = 0;
    return (
      <div>
        {this.arrayOfSelution(this.props.solution).map((char) => {
          if (this.props.LettersStatus[char] == true) {
            {
              {
                letterSolved++;
              }
              return <span id="underSoure">{char}</span>;
            }
          } else {
            {
              return <span id="underSoure">_</span>;
            }
          }
        })}
        {this.win(letterSolved)}
      </div>
    );
  }
}

export default Solution;
