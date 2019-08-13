import React from 'react';

import './SearchPanel.css';

const SearchPanel = ({ onSearch }) => {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type to search"
      onChange={onSearch}
    />
  );
};

export default SearchPanel;
