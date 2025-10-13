import React from "react";
import { useNavigate } from "react-router-dom";

function ArchivedListCard() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/archived")}>View Archived Lists</button>;
}

export default ArchivedListCard;