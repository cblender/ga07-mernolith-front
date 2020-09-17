import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h1>MERNOLITH</h1>
      </Link>
    </div>
  );
}

export default Header;
