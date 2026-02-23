import React, { Component } from "react";

export default class Display extends Component {
  render(props) {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
