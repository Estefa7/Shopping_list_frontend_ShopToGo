import React from "react";
import { useLanguage } from "../../context/LanguageContext";

function Header({ listName, onRenameClick }) {
  const { t } = useLanguage();

  return (
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold mb-2">{t("shoppingList")}: "{listName}"</h1>
      <button
        onClick={onRenameClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition"
      >
        {t("renameList")}
      </button>
    </div>
  );
}

export default Header;
