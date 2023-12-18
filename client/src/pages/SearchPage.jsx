import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import TitleTable from '../components/TitleTable';
import { clearData } from '../slices/wikiSlice';
import { useDispatch, useSelector } from 'react-redux';

function SearchPage() {
  const dispatch = useDispatch();
  const { searchData } = useSelector((state) => state.wiki)
  const handleClear = () => {
    dispatch(clearData());
  }

  return (
    <div className='w-full h-full flex flex-col justify-content items-center'>
      <SearchBar />
      {searchData && (
        <>
          <TitleTable />
          <button
            onClick={handleClear}
            className='bg-red-900 text-white bg-opacity-90 rounded-full px-5 py-3 border-gray-200 shadow-md focus:outline-none'
          >
            Clear Data
          </button>
        </>
      )}

    </div>
  );
}

export default SearchPage;
