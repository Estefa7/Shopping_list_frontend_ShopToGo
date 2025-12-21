import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

function ArchivedListCard() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return <button onClick={() => navigate("/archived")}>{t("viewArchivedLists")}</button>;
}

export default ArchivedListCard;