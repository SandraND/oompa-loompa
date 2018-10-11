import React from 'react';

const SearchBar = (props) => {
    return (
        <form>
            <input
            onChange={props.changeSearchTermState}
            type='text'
            placeholder='Search Oompa-Loompa'
            value={props.term}></input>
        </form>
    )
}

export default SearchBar;