import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    username: " ",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const { username, email, password, confirmpassword } = data;

  const handler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => e.preventDefault();

  if (username.length <= 5) {
    console.log("username must contain atleast 5 characters");
  } else if (password !== confirmpassword) {
    alert("passwords not matching");
  } else {
    console.log(data);
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
            onChange={handler}
          />
          <br />
          <input
            type="email"
            name="email"
            value={email}
            placeholder="enter email"
            onChange={handler}
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="enter password"
            onChange={handler}
          />
          {password !== confirmpassword ? (
            <p style={{ color: "red" }}>passwords not matching</p>
          ) : null}
          <br />
          <input
            type="password"
            name="confirmpassword"
            value={confirmpassword}
            placeholder="enter password"
            onChange={handler}
          />
          <br />
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  );
};

export default App;
