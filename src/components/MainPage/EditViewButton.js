import React from "react";
import { useLanguage } from "../../context/LanguageContext";


function EditViewButton({ onEdit, onView, isOwner }) {
  const { t } = useLanguage();
  return isOwner ? (
    <button onClick={onEdit}>{t("edit")}</button>
  ) : (
    <button onClick={onView}>{t("view")}</button>
  );
}

export default EditViewButton;