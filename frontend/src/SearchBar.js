import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar">
      {/* Your search bar implementation */}

      <div className="logo">
        SmartLearn
      </div>
      <input type="text" placeholder="Search courses..." />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;