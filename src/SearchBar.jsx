import React, { useState } from "react";
import CustomDD from "./DropDown";

const SearchBar = ({ onSearch, onSearchTypeChange }) => {
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("Anime");

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search !== "") {
      onSearch(search);
      setSearch("");
    }
  };

  const handleOptionChange = searchType => {
    onSearchTypeChange(searchType.toLowerCase());
    setSearchType(searchType);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit} id="searchForm">
        <CustomDD
          options={["Anime", "Manga"]}
          onOptionChange={handleOptionChange}
        />
        <input
          type="text"
          id="searchInput"
          placeholder={`Search ${searchType}...`}
          onChange={handleChange}
          value={search}
        />
      </form>
    </div>
  );
};

export default SearchBar;
