import React from "react";
import { useLanguage } from "../../context/LanguageContext";

function UnarchiveButton({ onUnarchive }) {
  const { t } = useLanguage();

  return <button onClick={onUnarchive}>{t("unarchive")}</button>;
}

export default UnarchiveButton;