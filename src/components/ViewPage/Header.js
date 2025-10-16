import React from "react";

function Header ( {listName, ownerName})   {
    return (
    <div className="text-left mb-6">
      <h1 className="text-3xl font-bold mb-2">Shopping List: "{listName}"</h1>
      <p className="text-lg text-gray-600"><strong>Owner:</strong> {ownerName}</p>
    </div>
    );
}

export default Header;