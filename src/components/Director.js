import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Director.css";

function Director({ match, img, id, name }) {
  return (
    <>
      <Link to={`/directors/${id}`}>
        <div
          style={{ backgroundImage: `url(${img})`, borderRadius: "3px" }}
          className="director"
        >
          <div className="hover__name">
            <h2 style={{ fontSize: "40px" }}>{name}</h2>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Director;
