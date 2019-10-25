import React from 'react';

import './search-box.style.css'

export const SearchBar = ({ placeHolder, handleChange }) =>{
    return(
        <input
            className={'search'}
            type={`search`}
            placeholder={placeHolder}
            onChange={handleChange}
        />
    );
};
