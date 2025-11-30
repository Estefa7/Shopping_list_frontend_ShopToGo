import React from "react";

export default function Loader({ size = 40 }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
      <svg width={size} height={size} viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="none" stroke="#cbd5d5" strokeWidth="6"/>
        <path d="M45 25a20 20 0 0 1-20 20" stroke="#5eaaa8" strokeWidth="6" strokeLinecap="round" fill="none">
          <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite"/>
        </path>
      </svg>
    </div>
  );
}
