import React from 'react';
import "./Search.scss";

const Search = () => {
  return (
    <section className="search-container">
      <div className="search-icon">
        <i className="fa fa-search"></i>
      </div>

      <input
        type="text"
        placeholder="Search for a country"
        className="search-input"
        value=""
      />
    </section>
  );
};

export default Search;
