import React from "react";
import { useLanguage } from "../../context/LanguageContext";

function SearchBar({ onSearch }) {
  const { t } = useLanguage();
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return <input type="text" placeholder={t("searchLists")} onChange={handleChange} />;
}

export default SearchBar;