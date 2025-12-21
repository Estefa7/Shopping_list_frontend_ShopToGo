import React from "react";
import { useLanguage } from "../../context/LanguageContext";

function Header ( {listName, ownerName})   {
  const { t } = useLanguage();
    return (
    <div className="text-left mb-6">
      <h1 className="text-3xl font-bold mb-2">{t("shoppingList")}: "{listName}"</h1>
      <p className="text-lg text-gray-600"><strong>{t("owner")}:</strong> {ownerName}</p>
    </div>
    );
}

export default Header;