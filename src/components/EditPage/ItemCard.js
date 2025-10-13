import React from "react";

function ItemCard({
  itemId,
  itemName,
  isResolved,
  onResolve,
  onUnresolve,
  onDelete,
}) {
  return (
    <div>
      <span style={{ textDecoration: isResolved ? "line-through" : "none" }}>
        {itemName}
      </span>
      <input type="checkbox" checked={isResolved} readOnly />
      {isResolved ? (
        <button onClick={() => onUnresolve(itemId)}>Unresolve</button>
      ) : (
        <button onClick={() => onResolve(itemId)}>Resolve</button>
      )}
      <button onClick={() => onDelete(itemId)}>Delete</button>
    </div>
  );
}

export default ItemCard;