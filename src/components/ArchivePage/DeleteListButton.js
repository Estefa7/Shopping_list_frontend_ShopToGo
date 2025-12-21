import React from "react";
import { useLanguage } from "../../context/LanguageContext";

function DeleteListButton({ onDelete }) {
  const { t } = useLanguage();

  return <button onClick={onDelete}>{t("delete")}</button>;
}

export default DeleteListButton;