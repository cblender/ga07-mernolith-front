import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Director.css";

function Director({ match, img, id }) {
  return (
    <>
      <Link to={`/directors/${id}`}>
        <div
          style={{ backgroundImage: `url(${img})`, borderRadius: "3px" }}
          className="director"
        ></div>
      </Link>
    </>
  );
}

export default Director;
