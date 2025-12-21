import React from "react";
import { useLanguage } from "../../context/LanguageContext";

function ItemCard({
  itemId,
  itemName,
  isResolved,
  onResolve,
  onUnresolve,
  onDelete,
}) {
  const { t } = useLanguage();
  return (
    <div>
      <span style={{ textDecoration: isResolved ? "line-through" : "none" }}>
        {itemName}
      </span>
      <input type="checkbox" checked={isResolved} readOnly />
      {isResolved ? (
        <button onClick={() => onUnresolve(itemId)}>{t("unresolve")}</button>
      ) : (
        <button onClick={() => onResolve(itemId)}>{t("resolve")}</button>
      )}
      <button onClick={() => onDelete(itemId)}>{t("delete")}</button>
    </div>
  );
}

export default ItemCard;