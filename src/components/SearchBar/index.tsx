import React from "react";
import logo from "../../assets/Logo_ML.png";
import searchIcon from "../../assets/ic_Search.png";
import "./styles.scss";

const SearchBar = ({ onChange, value, onSearch, onKeyDown }) => {
  const handleSearchClick = () => {
    onSearch();
  };

  return (
    <div className="search-bar">
      <div className="search-barContainer">
        <img src={logo} alt="Mercado Libre" className="logo" />
        <input
          className="search-input"
          type="text"
          placeholder="Buscar"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <button className="search-button" onClick={handleSearchClick}>
          <img src={searchIcon} alt="Buscar" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
