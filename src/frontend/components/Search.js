import React from 'react'
import '../styles/App.css';


function Search(props) {
    return (
        <input type = 'search'
        className = 'search'
        placeholder = "Search Notes..."
        onChange = {props.handleChange}
        /> 
    )
}

export default Search
