/*
    Search.js

    The Search react component.  It provides and input element to enter a search string.

    The onChange event is passed back to the parent component to be handled by an ancestory.

*/

import React from 'react'
import '../styles/App.css';

function Search(props) {
    return (
        <div className="search-add">
            <label htmlFor='search'><span className="visually-hidden">Search</span></label>
            <input type='search'
                id="search"
                className='search'
                placeholder="Search Notes..."
                onChange={props.searchChange}
            /> 
        </div>
    );
};
    
export default Search;