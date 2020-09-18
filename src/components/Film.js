import React from "react";
import "./Film.css";

function Film({ img }) {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className="film"></div>
  );
}

export default Film;
