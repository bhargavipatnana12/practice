import React from "react";

const App = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const filtered = arr.filter((item) => item > 5);
  return (
    <div>
      {filtered.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
};

export default App;
