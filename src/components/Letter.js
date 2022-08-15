import React, { Component } from "react";
class Letter extends Component {
  render() {
    let array = ["_ ", " _ ", " _ ", " _ "];
    return array.map((a) => <span>{a}</span>);
  }
}
export default Letter;
