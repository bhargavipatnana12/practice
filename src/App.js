import React from "react";
function Oldversion() {
  console.log("hello");
}

const Newversion = () => {
  console.log("hii");
};

const Newvreturn = (n1, n2) => {
  return n1 + n2;
};
console.log(Newvreturn(2, 4));

const App = () => {
  return (
    <div>
      <h1>HELLO WORLD</h1>
      <Oldversion />
      <Newversion />
      <Newvreturn />
    </div>
  );
};

export default App;
