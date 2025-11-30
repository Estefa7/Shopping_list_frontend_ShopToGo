import React from "react";
import EditViewButton from "./EditViewButton";
import ArchiveButton from "./ArchiveButton";
import DeleteListButton from "./DeleteListButton";
import LeaveListButton from "./LeaveListButton";
import { useShoppingLists } from "../../context/ShoppingListContext";

function ShoppingListCard({
  list,
  isOwner,
  onClick,
  onArchive,
  onDelete,
  onLeave,
}) {

  const { operationStatus } = useShoppingLists();

  const archivePending = operationStatus[`list:${list.id}:archive`]?.status === "pending";
  const deletePending = operationStatus[`list:${list.id}:delete`]?.status === "pending";
  const leavePending = operationStatus[`list:${list.id}:leave`]?.status === "pending";

  return (
    <div className="ShoppingListCard">
      <h3>{list.title}</h3>

      <p><span>Owner: </span>{list.owner}</p>
      <p><span>Members: </span>{list.members.join(", ")}</p>
      <p>
        <span>Items: </span>
        {list.items.length} total, {list.items.filter(i => i.resolved).length} resolved
      </p>

      {/* Открыть */}
      <button onClick={onClick}>Open</button>

      {/* Archive */}
      <ArchiveButton
        onArchive={onArchive}
        disabled={archivePending}
        label={archivePending ? "Archiving..." : "Archive"}
      />

      {/* Delete / Leave */}
      {isOwner ? (
        <DeleteListButton
          onDelete={onDelete}
          disabled={deletePending}
          label={deletePending ? "Deleting..." : "Delete"}
        />
      ) : (
        <LeaveListButton
          onLeave={onLeave}
          disabled={leavePending}
          label={leavePending ? "Leaving..." : "Leave List"}
        />
      )}
    </div>
  );
}

export default ShoppingListCard;
