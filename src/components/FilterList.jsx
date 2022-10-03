import React from 'react'

const FilterList = ({suggestedList, setSearchInput}) => {

    console.log(suggestedList);

    const handleClick = id => setSearchInput(id)

  return (
    <ul className='suggestedList'>
        {
            suggestedList?.map(location => (
                <li onClick={() => handleClick(location.id)} key={location.id}>{location.name}</li>
            ))
        }
    </ul>
  )
}

export default FilterList