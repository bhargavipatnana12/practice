import React, { Component } from "react";
import Display from "./Display";

export default class App extends Component {
  state = { name: "sri" };
  render() {
    return (
      <div>
        <Display name={this.state.name} />
      </div>
    );
  }
}
