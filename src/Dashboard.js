import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/About");
  };
  return (
    <div>
      <center>
        {" "}
        <h1>WELCOME TO DASHBOARD</h1>
        <button onClick={handleClick}>Login</button>
      </center>
    </div>
  );
};

export default Dashboard;
