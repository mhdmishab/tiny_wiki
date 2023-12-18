import React, { useRef, useState } from 'react';
import { message } from 'antd';
import { useDispatch, useSelector} from 'react-redux';
import { GetSearchData } from '../slices/wikiSlice';


const SearchBar = () => {
    const dispatch = useDispatch();
    const {loading}=useSelector((state)=>state.wiki)
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = inputRef.current.value;
        if (text === '') {
            return message.error('Search bar is empty');
        }
        console.log(text);
        dispatch(GetSearchData(text));
    };

    return (
        <div className="flex flex-col m-8 sm:flex-row">
            <input
                ref={inputRef}
                className="mb-2 sm:mr-2 sm:mb-0 bg-white w-full bg-opacity-90 rounded-full px-5 py-3 border-gray-200 shadow-md focus:outline-none focus:border-blue-300"
                type="search"
                name="search"
                placeholder="Search"
            />
            <button
                onClick={handleSubmit}
                className="bg-blue-900 text-white bg-opacity-90 rounded-full px-5 py-3 border-gray-200 shadow-md focus:outline-none"
            >
                {loading?"Loading":"Search"}
            </button>
        </div>
    );
};

export default SearchBar;
