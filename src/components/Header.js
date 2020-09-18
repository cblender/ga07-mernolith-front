import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h1>MERNOLITH</h1>{" "}
        {/* UPDATE: change "MERNOLITH" to a JS variable that we can pass page title data to. */}
      </Link>
    </div>
  );
}

export default Header;
