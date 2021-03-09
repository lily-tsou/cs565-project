import React from 'react'
import '../styles/App.css';

function Search(props) {
    return (
        <div className = "search-add">
            <label htmlFor='search'><span className = "visually-hidden">Search</span></label>
            <input type = 'search'
            id = "search"
            className = 'search'
            placeholder = "Search Notes..."
            onChange = {props.handleChange}
            /> 
        </div>
        )
    }
    
    export default Search
    