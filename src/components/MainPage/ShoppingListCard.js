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
    <div className="card">
      <h3>{title}</h3>
      <p>Owner: {owner}</p>
      <p>Members: {members.join(", ")}</p>
      <p>Items: {items.length} total, {resolvedCount} resolved</p>
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