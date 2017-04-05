import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      num1: 6,
      num2: 3
    }
  }
  render() {
    return (
      <div>
        <h1>JSX Variables</h1>
        <p>this.state.num1 + this.state.num2 = {this.state.num1 + this.state.num2}</p>
        <p>this.state.num1 / this.state.num2 = {this.state.num1 / this.state.num2}</p>
        <p>
          this.state.num1 + this.state.num2 * randomNumberBetween 1 & 10. = {this.state.num1 + this.state.num2 * (Math.floor(Math.random() * 10) + 1)}
        </p>
      </div>
    );
  }
}

export default App;
