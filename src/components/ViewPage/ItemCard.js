import React from "react";
import { useLanguage } from "../../context/LanguageContext";

function ItemCard({ itemId, itemName, isResolved, onResolve, onUnresolve }) {
  const { t } = useLanguage();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginBottom: "4px",
      }}
    >
      <input type="checkbox" checked={isResolved} readOnly />
      <span
        style={{
          textDecoration: isResolved ? "line-through" : "none",
          color: isResolved ? "gray" : "black",
        }}
      >
        {itemName}
      </span>
      {isResolved ? (
        <button onClick={() => onUnresolve(itemId)}>{t("unresolve")}</button>
      ) : (
        <button onClick={() => onResolve(itemId)}>{t("resolve")}</button>
      )}
    </div>
  );
}

export default ItemCard;
