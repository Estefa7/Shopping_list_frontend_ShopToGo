import React from "react";
import { useLanguage } from "../../context/LanguageContext";

function ArchiveButton({ onArchiveList, label }) {
  const { t } = useLanguage();

  return (
    <button onClick={onArchiveList}>
      {label || t("archiveList")}
    </button>
  );
}

export default ArchiveButton;