import React from "react";
import ItemCard from "./ItemCard";

function ItemList({ items, onResolveItem, onUnresolveItem }) {
  return (
    <div>
      <h3>Items:</h3>
      {items.length === 0 ? (
        <p>No items in this list.</p>
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
