import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const NavbarComp = () => {
  return (
    <div>
      <Navbar>
        <Link to="/" style={{ gap: "500" }}>
          Home
        </Link>
        <Link to="/Dashboard" style={{ gap: "100" }}>
          Dashboard
        </Link>
        <Link to="/About" style={{ gap: "100" }}>
          About
        </Link>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
