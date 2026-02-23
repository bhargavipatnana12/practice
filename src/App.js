import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => console.log("clicked"), []);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default App;
