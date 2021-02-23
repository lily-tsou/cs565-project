import React from 'react'
import '../styles/search.css';


function Search(props) {
    return (
        <div className = "wrapper"> 
            <input type = 'search'
            className = 'search'
            placeholder = "Search Notes..."
            onChange = {props.handleChange}
            /> 
        </div>
    )
}

export default Search
