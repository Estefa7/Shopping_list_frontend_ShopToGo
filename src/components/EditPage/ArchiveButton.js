import React from "react";
import { useLanguage } from "../../context/LanguageContext";

function ArchiveButton({ onArchiveList }) {
  const { t } = useLanguage();

  return <button onClick={onArchiveList}>{t("archiveList")}</button>;
}

export default ArchiveButton;