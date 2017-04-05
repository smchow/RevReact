import React, { Component } from 'react';
import Child from './Child';

class App extends Component {
  constructor() {
    super();
    this.state = {
      initialNumber: 3
    }
  }
  render() {
    return (
      <div>
        <Child number={this.state.initialNumber * 2} />
        <Child number={this.state.initialNumber * 4} />
        <Child number={this.state.initialNumber * 6} />
      </div>
    )
  }
}

export default App;
