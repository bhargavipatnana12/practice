import React from "react";
import { increase, decrease } from "./Action";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
const Inc = ({ count, increase, decrease }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <center>
        <h1>Count from Inc componen : {count}</h1>
        <button onClick={() => dispatch(increase())}>Increase</button>
        <button onClick={() => decrease()}>Decrease</button>
      </center>
    </div>
  );
};

export default Inc;
