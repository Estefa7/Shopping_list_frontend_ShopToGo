import React from "react";

function LeaveListButton({ onLeave, disabled, label = "Leave List" }) {
  return (
    <button onClick={onLeave} disabled={disabled}>
      {label}
    </button>
  );
}

export default LeaveListButton;
