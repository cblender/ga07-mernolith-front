import React, { useState } from "react";
import "./Director.css";

function Director({ match, img }) {
  return (
    <div
      style={{ backgroundImage: `url(${img})`, borderRadius: "3px" }}
      className="director"
    >

    </div>
    
  );
}

export default Director;
