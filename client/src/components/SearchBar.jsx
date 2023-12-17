import React, { useState } from 'react';

const SearchBar = () => {
    const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <>
    <div className="flex m-3 ">
      <input
        className="bg-white w-full bg-opacity-90 rounded-full px-5 py-3 border-gray-200 shadow-md focus:outline-none focus:border-blue-300 "
        type="search"
        name="search"
        placeholder="Search"
        
      />
      <button className="bg-white bg-opacity-90 rounded-full px-5 py-3 border-gray-200 shadow-md focus:outline-none  ">
        search
      </button>
    </div>
    </>
  );
};

export default SearchBar;
