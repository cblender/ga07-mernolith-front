import { IconButton } from "@material-ui/core";
import React from "react";
import "./Button.css";

export default function Button({ type }) {
  return (
    <div className="button">
      <IconButton>{type}</IconButton>
    </div>
  );
}
