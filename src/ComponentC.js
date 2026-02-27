import React from "react";
import { UserContext } from "./App";

const ComponentC = () => {
  return (
    <div>
      <center>
        <UserContext.Consumer>
          {(value) => (
            <div>
              <h1>{value}</h1>
            </div>
          )}
        </UserContext.Consumer>
      </center>
    </div>
  );
};

export default ComponentC;
