import React from "react";
import Button from "../components/Button";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

export default {
  title: "Button",
  component: Button,
};

export function edit() {
  return <Button type={<EditIcon />} />;
}

export function add() {
  return <Button type={<AddIcon />} />;
}

export function remove() {
  return <Button type={<DeleteOutlineOutlinedIcon />} />;
}
