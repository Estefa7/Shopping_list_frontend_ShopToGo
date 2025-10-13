import React from "react";

function Header({ listName, onChangeName }) {
  const handleChange = (e) => {
    onChangeName(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={listName}
        onChange={handleChange}
        placeholder="List title"
      />
    </div>
  );
}

export default Header;