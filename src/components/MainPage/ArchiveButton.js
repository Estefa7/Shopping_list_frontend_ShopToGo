import React from "react";

function ArchiveButton({ onArchive, disabled, label = "Archive" }) {
  return (
    <button onClick={onArchive} disabled={disabled}>
      {label}
    </button>
  );
}

export default ArchiveButton;
