import React from 'react'

const FilterList = ({suggestedList, handleClick}) => {

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