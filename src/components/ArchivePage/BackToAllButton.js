import React from "react";
import { useLanguage } from "../../context/LanguageContext";

function LeaveListButton({ onLeave }) {
  const { t } = useLanguage();

  return <button onClick={onLeave}>{t("leaveList")}</button>;
}

export default LeaveListButton;