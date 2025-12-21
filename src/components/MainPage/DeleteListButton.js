import React from "react";
import { useLanguage } from "../../context/LanguageContext";

function DeleteListButton({ onDelete, disabled, label }) {
  const { t } = useLanguage();

  return (
    <button onClick={onDelete} disabled={disabled}>
      {label || t("delete")}
    </button>
  );
}

export default DeleteListButton;
