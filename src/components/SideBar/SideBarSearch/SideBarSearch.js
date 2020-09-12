import React from "react";

import "./SideBarSearch.scss";
const SideBarSearch = ({ searchValue, setSearchValue, setSortingDirection }) => {
  return (
    <div className="SideBarSearch">
      <input className="search-input" placeholder="Search Records..." value={searchValue} onChange={({ target }) => setSearchValue(target.value)}></input>
      <div className="sorting">
        <div className="upper-arrow" onClick={() => setSortingDirection("desc")}></div>
        <div className="lower-arrow" onClick={() => setSortingDirection("asc")}></div>
      </div>
    </div>
  );
};

export default SideBarSearch;
