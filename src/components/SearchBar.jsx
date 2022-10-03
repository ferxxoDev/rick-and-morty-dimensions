import React from 'react'
import FilterList from './FilterList'

const SearchBar = ({handleSubmit, handleChange, suggestedList, setSearchInput, setsuggestedList}) => {

    const search_bar = document.getElementById("idLocation")

    const handleClick = id => {
        setSearchInput(id)
        setsuggestedList()
        search_bar.value = ""
    }

    return (
        <form onSubmit={handleSubmit}>
            <label for="idLocation">
                {/* Search by number ID dimension */}
            </label>
            <input

                className='searchBar'
                id='idLocation'
                placeholder='Search by dimension ID number'
                type="text"
                onChange={handleChange}
            />
            <button>Search</button>
            <FilterList
                suggestedList={suggestedList}
                handleClick={handleClick}
            />
        </form>
    )
}

export default SearchBar