import React from 'react';

const SearchBar = (props) => {
    console.log(props);
    return (
        <form>
            <input
            onChange={props.changeSearchTermState}
            type='text'
            placeholder='Search Oompa-Loompa'
            value={props.term}
            />
        </form>
    )
}

export default SearchBar;