import logo from "./logo.svg";
import "./App.css";
import Letters from "./components/Letters";
import Solution from "./components/Solution";
import Score from "./components/Score";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      scoure: 100,
      hint: "My family Name",
      solution: "HAJALI",
      LettersStatus: this.allLetters(),
    };
  }
  deleteTheLetter = (char) => {
    let tempObject = {};
    for (let key in this.state.LettersStatus) {
      tempObject[key] = this.state.LettersStatus[key];
    }
    tempObject[char] = true;
    this.setState({ LettersStatus: tempObject });
  };
  allLetters() {
    let arrayOfAllLetters = [];
    let char = "A";
    while (char != "Z") {
      arrayOfAllLetters[char] = false;
      char = String.fromCharCode(char.charCodeAt(0) + 1);
    }
    return arrayOfAllLetters;
  }
  increaseScore = (count) => {
    let tempObj = this.state.scoure;
    while (count > 0) {
      tempObj += 20;
      count--;
    }
    this.setState({ scoure: tempObj });
  };
  decreaseScore = () => {
    this.setState({ scoure: this.state.scoure - 20 });
  };
  render() {
    return (
      <div>
        <Solution
          solution={this.state.solution}
          LettersStatus={this.state.LettersStatus}
          decreaseScore={this.decreaseScore}
          score={this.state.scoure}
        />
        <Letters
          hint={this.state.hint}
          allLetters={this.state.LettersStatus}
          deleteTheLetter={this.deleteTheLetter}
          solution={this.state.solution}
          increaseScore={this.increaseScore}
          decreaseScore={this.decreaseScore}
        />

        <Score score={this.state.scoure} />
      </div>
    );
  }
}

export default App;
