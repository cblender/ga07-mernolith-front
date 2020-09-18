import React, { useState } from "react";
import "./Film.css";

function Film({ match, img }) {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className="film"></div>
  );
}

export default Film;
