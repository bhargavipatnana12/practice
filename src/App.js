import React from "react";

const App = () => {
  const arr = ["react", "js", "viewjs"];

  const array = [{ id: 1 }, { name: "sruthi" }, { place: "vsd" }];
  return (
    <div>
      {arr.map((value, index) => (
        <li>{value}</li>
      ))}
      {array.map((value) => (
        <li key={value.id}>
          {value.name}
          {value.place}
        </li>
      ))}
    </div>
  );
};

export default App;
