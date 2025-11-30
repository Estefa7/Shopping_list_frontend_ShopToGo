import React from "react";

function DeleteListButton({ onDelete, disabled, label = "Delete" }) {
  return (
    <button onClick={onDelete} disabled={disabled}>
      {label}
    </button>
  );
}

export default DeleteListButton;
