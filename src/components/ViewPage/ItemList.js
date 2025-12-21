import React from "react";
import ItemCard from "./ItemCard";
import { useLanguage } from "../../context/LanguageContext";

function ItemList({ items, onResolveItem, onUnresolveItem }) {
  const { t } = useLanguage();

  return (
    <div>
      <h3>{t("items")}:</h3>
      {items.length === 0 ? (
        <p>{t("noItemsInList")}</p>
      ) : (
        items.map((item) => (
          <ItemCard
            key={item.id}
            itemId={item.id}
            itemName={item.name}
            isResolved={item.resolved}
            onResolve={onResolveItem}
            onUnresolve={onUnresolveItem}
          />
        ))
      )}
    </div>
  );
}

export default ItemList;
