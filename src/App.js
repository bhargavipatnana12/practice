import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>count is : {count}</h3>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
};

export default App;
