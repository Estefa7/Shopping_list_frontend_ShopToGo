import React from "react";

function DeleteListButton({ onDeleteList }) {
  return <button onClick={onDeleteList}>Delete List</button>;
}

export default DeleteListButton;