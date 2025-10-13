import React from "react";

function BackButton({ onBack }) {
  return <button onClick={onBack}>← Back to all lists</button>;
}

export default BackButton;