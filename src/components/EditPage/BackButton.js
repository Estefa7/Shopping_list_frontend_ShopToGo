import React from "react";
import { useLanguage } from "../../context/LanguageContext";

function BackButton({ onBack }) {
  const { t } = useLanguage();

  return <button onClick={onBack}>← {t("backToAll")}</button>;
}

export default BackButton;
