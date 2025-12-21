import React from "react";
import { useLanguage } from "../../context/LanguageContext";

function LeaveListButton({ onLeave, disabled, label }) {
  const { t } = useLanguage();

  return (
    <button onClick={onLeave} disabled={disabled}>
      {label || t("leaveList")}
    </button>
  );
}

export default LeaveListButton;
