import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function ErrorBanner({ message, onClose }) {
  const { t } = useLanguage();
  if (!message) return null;

  return (
    <div style={{
      background: "#ffeaea",
      padding: 12,
      borderRadius: 8,
      marginBottom: 12,
      border: "1px solid #ffb2b2",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <span style={{ color: "#a20000" }}>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          style={{
            padding: "4px 8px",
            borderRadius: 6,
            border: "none",
            background: "#ffd3d3"
          }}
        >
          {t("close")}
        </button>
      )}
    </div>
  );
}
