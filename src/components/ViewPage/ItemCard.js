import React from "react";

function ItemCard({itemId, itemName, isResolved, onResolve, onUnresolve})   {
    return (
        <div style={{marginBottom: "10px"}}>
            <span>
                {isResolved ? "✅": "⬜"} {itemName}
            </span>
            {isResolved ? (
                <button onClick={() => onUnresolve(itemId)}>Unresolve</button>
            ):(
                <button onClick={() => onResolve(itemId)}>Resolve</button>
            )}
        </div>
    );
}

export default ItemCard;