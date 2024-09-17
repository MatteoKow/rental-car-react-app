import React from 'react';
import './SearchBar.css';

import {BiSearch } from "react-icons/bi";
const SearchBar = ({handleOnChangeBar, searchBarData}) => {
    return (
        <div className='bar-container'>
            <div className='search-icon'>
                <BiSearch size='20px' color='white'/>
            </div>
            <input onChange={handleOnChangeBar} value={searchBarData} type="text" />
        </div>
    )
};

export default SearchBar;