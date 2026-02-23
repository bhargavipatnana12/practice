import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("sruthi");
  return (
    <div>
      <h1>welcome {name}</h1>
      <button onClick={() => setName("patnana")}>change</button>
    </div>
  );
};

export default App;
