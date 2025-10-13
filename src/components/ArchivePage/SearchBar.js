import React from "react";

function SearchBar({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return <input type="text" placeholder="Search archived lists..." onChange={handleChange} />;
}

export default SearchBar;