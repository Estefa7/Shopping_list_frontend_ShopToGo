import React from "react";

function ItemCard({ itemId, itemName, isResolved, onResolve, onUnresolve }) {
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
        <button onClick={() => onUnresolve(itemId)}>Unresolve</button>
      ) : (
        <button onClick={() => onResolve(itemId)}>Resolve</button>
      )}
    </div>
  );
}

export default ItemCard;
