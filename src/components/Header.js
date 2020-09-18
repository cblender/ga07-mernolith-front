import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import ButtonStories, { add, edit, remove } from "../stories/Button.stories";

function Header() {
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <div className="title">
          <h1>MERNOLITH</h1>
        </div>
        {/* UPDATE: change "MERNOLITH" to a JS variable that we can pass page title data to. */}
      </Link>
      <div className="buttons">
        {remove()}
        {add()}
        {edit()}
      </div>
    </div>
  );
}

export default Header;
