import React, { Component } from "react";

class Letters extends Component {
  showLetter(le) {
    console.log(le);
    return <button>{le}</button>;
  }
  render() {
    let letters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    // return <button>{letters}</button>;
    return letters.map((e) => (
      <div id="product">
        <button id="buttonOfletter">{e}</button>
      </div>
    ));
  }
}
export default Letters;
