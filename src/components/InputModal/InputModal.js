import React, { useState } from "react";
import "./InputModal.css";

function InputModal({ title, placeholder, initialValue = "", onConfirm, onCancel }) {
  const [value, setValue] = useState(initialValue);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{title}</h3>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="modal-input"
        />
        <div className="modal-buttons">
          <button onClick={onCancel} className="cancel">Cancel</button>
          <button
            onClick={() => {
              if (value.trim()) onConfirm(value.trim());
            }}
            className="confirm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputModal;
