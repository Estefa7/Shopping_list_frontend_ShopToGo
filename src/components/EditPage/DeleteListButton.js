import React from "react";
import { useLanguage } from "../../context/LanguageContext";

function DeleteListButton({ onDeleteList }) {
  const { t } = useLanguage();

  return <button onClick={onDeleteList}>{t("deleteList")}</button>;
}


export default DeleteListButton;