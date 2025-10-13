import React from "react";

function EditViewButton({ onEdit, onView, isOwner }) {
  return isOwner ? (
    <button onClick={onEdit}>Edit</button>
  ) : (
    <button onClick={onView}>View</button>
  );
}

export default EditViewButton;