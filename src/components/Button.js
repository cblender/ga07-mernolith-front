import { IconButton } from "@material-ui/core";
import React from "react";

export default function Button({ type }) {
  return (
    <div className="button">
      <IconButton>{type}</IconButton>
    </div>
  );
}
