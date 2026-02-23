import React from "react";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const { username, password } = data;

  const handler = (e) =>
    setData({ ...data, [e.target.name]: [e.target.value] });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="username"
          name="username"
          value={username}
          onChange={handler}
          placeholder="enter username"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handler}
          placeholder="enter password"
        />
        <input type="submit" name="submit" />
      </form>
    </div>
  );
};

export default App;
