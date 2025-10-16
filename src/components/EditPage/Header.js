import React from "react";

function Header({ listName, onRenameClick }) {
  return (
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold mb-2">Shopping List: "{listName}"</h1>
      <button
        onClick={onRenameClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition"
      >
        Rename List
      </button>
    </div>
  );
}

export default Header;
