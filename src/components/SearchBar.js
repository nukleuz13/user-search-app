import React from 'react';

const SearchBar = ({ searchTerm, onChange }) => {
    return (
        <input
            type="text"
            placeholder="Поиск по имени..."
            value={searchTerm}
            onChange={onChange}
            className="search-bar"
        />
    );
};

export default SearchBar;
