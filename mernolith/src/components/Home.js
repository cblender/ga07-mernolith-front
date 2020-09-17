import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home__container">
      <Link to="/directors" style={{ textDecoration: "none" }}>
        <div className="link">directors</div>
      </Link>
      <Link to="/films" style={{ textDecoration: "none" }}>
        <div className="link">films</div>
      </Link>
    </div>
  );
}

export default Home;
