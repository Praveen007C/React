// SearchBar.jsx
import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Search for products..." 
                value={searchTerm} 
                onChange={onSearchChange} 
                className="search-input" 
            />
            <button className="search-button" onClick={() => onSearchChange(searchTerm)}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
