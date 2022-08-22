import React, { Component } from "react";
class Letter extends Component {
  deleteLetter = () => {
    this.checkPartOfSolution(this.props.char);
    this.props.deleteTheLetter(this.props.char);
  };
  checkPartOfSolution(letter) {
    let arrayOfSolution = this.props.solution.split("");
    let conut = 0;
    for (let char of arrayOfSolution) {
      if (letter == char) {
        conut++;
      }
    }
    if (conut == 0) {
      this.props.decreaseScore();
    } else {
      this.props.increaseScore(conut);
    }
  }
  displayLetter = (value) => {
    if (value == true) {
      return <del>{this.props.char}</del>;
    } else {
      return <button onClick={this.deleteLetter}>{this.props.char}</button>;
    }
  };
  render() {
    return <span id="buto">{this.displayLetter(this.props.value)}</span>;
    // return array.map((a) => <span>{a}</span>);
  }
}
export default Letter;
