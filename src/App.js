import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState("");
  const handler = (e) => {
    setUser(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={user}
        placeholder="enter text"
        onChange={handler}
      />
      <br />
      {user}
    </div>
  );
};

export default App;
