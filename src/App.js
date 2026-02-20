//Creating and nesting components
import React from "react";
function Mybutton() {
  //Mybutton is a  React component..always starts with capital letter.
  return (
    <button onClick={() => alert("hello sruthi..how r you..?")}>
      I'm a buttom
    </button>
  );
}
const App = () => {
  return (
    <div>
      <h1>HELLO WORLD</h1>
      <Mybutton />
    </div>
  );
};

export default App;
