import React from "react";
import './SearchBox.css'

const SearchBox = ({ HandleInputChange }) => {
    return (
        <div className="search-container">
            <input className="search-input" type="text" placeholder="Type Keywords Here" onChange={(event) => {HandleInputChange(event.target.value)}}/>
        </div>
    )
}

export default SearchBox;