import React from "react";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const { username, email, password, confirmpassword } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };
  const submitHandler = (e) => e.preventDefault();

  if (password === confirmpassword) {
    console.log(data);
  } else {
    console.log("passwords r not matching");
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="enter username"
            onChange={changeHandler}
          />
          <br />
          <input
            type="email"
            name="email"
            value={email}
            placeholder="enter email"
            onChange={changeHandler}
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="enter password"
            onChange={changeHandler}
          />{" "}
          <br />
          <input
            type="password"
            name="confirmpassword"
            value={confirmpassword}
            placeholder="enter password"
            onChange={changeHandler}
          />
          <br />
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  );
};

export default App;
