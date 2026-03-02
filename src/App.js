import React from "react";
import { connect } from "react-redux";
import Inc from "./Inc";

const App = ({ count }) => {
  return (
    <div>
      <center>
        {" "}
        <h1>Count from App component : {count}</h1>
        <Inc />
      </center>
    </div>
  );
};

export default App;
