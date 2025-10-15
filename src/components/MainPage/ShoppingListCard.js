import React from "react";
import EditViewButton from "./EditViewButton";
import ArchiveButton from "./ArchiveButton";
import DeleteListButton from "./DeleteListButton";
import LeaveListButton from "./LeaveListButton";


function ShoppingListCard({
  title,
  owner,
  members,
  items,
  resolvedCount,
  isOwner,
  onClick,
  onArchive,
  onDelete,
  onLeave,
}) {
  return (
    <div className="ShoppingListCard">
      <h3>{title}</h3>
      <p><span>Owner:</span> {owner}</p>
      <p><span>Members: </span>{members.join(", ")}</p>
      <p><span>Items: </span>{items.length} total, {resolvedCount} resolved</p>
      <button onClick={onClick}>Open</button>
      <ArchiveButton onArchive={onArchive} />
      {isOwner ? (
        <DeleteListButton onDelete={onDelete} />
      ) : (
        <LeaveListButton onLeave={onLeave} />
      )}
    </div>

  );
}

export default ShoppingListCard;