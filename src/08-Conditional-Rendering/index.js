import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";
import Display from "./Display";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showLorem: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ showLorem: !this.state.showLorem });
  }
  renderLorem() {
    if (this.state.showLorem) {
      return <Display count={this.state.count} />;
    }
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>
          Show Lorem
        </Button>
        {this.renderLorem()}
      </div>
    );
  }
}

export default App;
