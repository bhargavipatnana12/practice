import React, { Component } from "react";

export default class App extends Component {
  state = { name: "sruthi" };
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
