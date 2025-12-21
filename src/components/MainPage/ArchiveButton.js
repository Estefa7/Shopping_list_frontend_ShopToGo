import React from "react";
import { useLanguage } from "../../context/LanguageContext";

function ArchiveButton({ onArchive, disabled, label }) {
  const { t } = useLanguage();

  return (
    <button onClick={onArchive} disabled={disabled}>
      {label || t("archive")}
    </button>
  );
}

export default ArchiveButton;
