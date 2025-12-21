import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

function CreateListButton({ onClick }) {
  const { t } = useLanguage();
  return <button onClick={onClick}>{t("createNewList")}</button>;
}

export default CreateListButton;
