import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      <center>
        <h4>Hello World</h4>
        <button onClick={() => navigate("/Dashboard")}>Login</button>
      </center>
    </div>
  );
};

export default Home;
