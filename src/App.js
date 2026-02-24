import React from "react";

const App = () => {
  const names = ["srinu", "somu", "romu"];
  const filtered = names.filter((name) => name.includes("s"));

  return (
    <div>
      {filtered.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
};

export default App;
