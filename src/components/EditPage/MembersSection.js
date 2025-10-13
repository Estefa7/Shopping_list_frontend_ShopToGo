import React, { useState } from "react";

function MembersSection({ members = [], onAddMember, onRemoveMember }) {
  const [newMember, setNewMember] = useState("");

  const handleAdd = () => {
    const trimmed = newMember.trim();
    if (!trimmed) return; 
    onAddMember(trimmed);
    setNewMember("");
  };

  return (
    <div className="members-section">
      <h4 className="text-lg font-semibold mb-2">Members</h4>

      <div className="flex items-center gap-2 mb-3">
        <input
          type="text"
          value={newMember}
          onChange={(e) => setNewMember(e.target.value)}
          placeholder="Add member"
          className="border rounded-lg px-2 py-1 flex-1"
        />
        <button
          onClick={handleAdd}
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg"
        >
          Add
        </button>
      </div>

      {members.length === 0 ? (
        <p className="text-gray-500">No members yet.</p>
      ) : (
        <ul className="space-y-1">
          {members.map((member) => (
            <li
              key={member}
              className="flex justify-between items-center border-b pb-1"
            >
              <span>{member}</span>
              <button
                onClick={() => onRemoveMember(member)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MembersSection;
