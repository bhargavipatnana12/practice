import React, { useState } from "react";
import { Navigate } from "react-router-dom";
const Home = () => {
  const [auth, setAuth] = useState(false);
  if (auth) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div>
      <h1>WELCOME TO HOME PAGE</h1>
      <button onClick={() => setAuth(true)}>Login</button>
    </div>
  );
};

export default Home;
