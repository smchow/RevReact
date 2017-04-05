import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          text: "Learn HTML"
        },
        {
          id: 2,
          text: "Learn CSS"
        },
        {
          id: 3,
          text: "Learn JavaScript"
        },
        {
          id: 4,
          text: "Learn jQuery"
        },
        {
          id: 5,
          text: "Learn Firebase"
        },
        {
          id: 6,
          text: "Learn Node"
        },
        {
          id: 7,
          text: "Learn MySQL"
        },
        {
          id: 8,
          text: "Learn Handlebars"
        },
        {
          id: 9,
          text: "Learn Sequelize"
        },
        {
          id: 10,
          text: "Learn Mongo"
        },
        {
          id: 11,
          text: "Learn React"
        }
      ]
    };
  }
  render() {
    return (
      <ul>
        {this.state.data.map(item => {
          return (
            <li key={item.id}>
              {item.text}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default App;
