import React from "react";
import { useLanguage } from "../../context/LanguageContext";

function LeaveListButton({ onLeaveList, label }) {
  const { t } = useLanguage();

  return (
    <button onClick={onLeaveList}>
      {label || t("leaveList")}
    </button>
  );
}


export default LeaveListButton;