import React from "react";
import ItemCard from "./ItemCard";
import { useLanguage } from "../../context/LanguageContext";

function ItemList({
  items,
  onResolve,
  onUnresolve,
  onDelete,
  newItemName,
  onAddItem,
  setNewItemName,
}) {
  const { t } = useLanguage();

  return (
    <div>
      <h4>{t("items")}</h4>
      {items.map((item) => (
        <ItemCard
        key={item.id}
        itemId={item.id}
        itemName={item.name}
        isResolved={item.resolved}
        onResolve={onResolve}
        onUnresolve={onUnresolve}
        onDelete={onDelete}
        />
      ))}
      <input
        type="text"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
        placeholder={t("newItem")}
      />
      <button onClick={onAddItem}>{t("addNewItem")}</button>
    </div>
  );
}

export default ItemList;