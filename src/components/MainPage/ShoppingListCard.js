import React from "react";
import EditViewButton from "./EditViewButton";
import ArchiveButton from "./ArchiveButton";
import DeleteListButton from "./DeleteListButton";
import LeaveListButton from "./LeaveListButton";
import { useShoppingLists } from "../../context/ShoppingListContext";
import { useLanguage } from "../../context/LanguageContext";

function ShoppingListCard({
  list,
  isOwner,
  onClick,
  onArchive,
  onDelete,
  onLeave,
}) {

  const { operationStatus } = useShoppingLists();
  const { t } = useLanguage();

  const archivePending = operationStatus[`list:${list.id}:archive`]?.status === "pending";
  const deletePending = operationStatus[`list:${list.id}:delete`]?.status === "pending";
  const leavePending = operationStatus[`list:${list.id}:leave`]?.status === "pending";

  return (
    <div className="ShoppingListCard">
      <h3>{list.title}</h3>

      <p>
        <span>{t("owner")}: </span>
        {list.owner}
      </p>

      <p>
        <span>{t("members")}: </span>
        {list.members.join(", ")}
      </p>

      <p>
        <span>{t("items")}: </span>
        {list.items.length} {t("total")},{" "}
        {list.items.filter((i) => i.resolved).length} {t("resolved")}
      </p>

      {/* Progress bar */}
      <div className="ProgressBar">
        <div
          className="ProgressFill"
          style={{
            width: `${
              (list.items.filter((i) => i.resolved).length /
                list.items.length) *
              100
            }%`,
          }}
        />
      </div>

      {/* Open */}
      <button onClick={onClick}>{t("open")}</button>

      {/* Archive */}
      <ArchiveButton
        onArchive={onArchive}
        disabled={archivePending}
        label={archivePending ? t("archiving") : t("archive")}
      />

      {/* Delete / Leave */}
      {isOwner ? (
        <DeleteListButton
          onDelete={onDelete}
          disabled={deletePending}
          label={deletePending ? t("deleting") : t("delete")}
        />
      ) : (
        <LeaveListButton
          onLeave={onLeave}
          disabled={leavePending}
          label={leavePending ? t("leaving") : t("leaveList")}
        />
      )}
    </div>
  );
}

export default ShoppingListCard;
