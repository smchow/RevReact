import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";
import Display from "./Display";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>
          Increment +
        </Button>
        <Display count={this.state.count} />
      </div>
    );
  }
}

export default App;
