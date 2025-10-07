import React from "react";

function Header ( {listName, ownerName})   {
    return (
        <div>
            <h1>Shopping List: "{listName}"</h1>
            <p><strong>Owner:</strong>{ownerName}</p>
        </div>
    );
}

export default Header;