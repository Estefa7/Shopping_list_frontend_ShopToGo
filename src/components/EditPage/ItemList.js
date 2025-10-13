import React from "react";
import ItemCard from "./ItemCard";

function ItemList({
  items,
  onResolve,
  onUnresolve,
  onDelete,
  newItemName,
  onAddItem,
  setNewItemName,
}) {
  return (
    <div>
      <h4>Items</h4>
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
        placeholder="New item"
      />
      <button onClick={onAddItem}>Add New Item</button>
    </div>
  );
}

export default ItemList;