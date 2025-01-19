import React, { memo, useContext, useEffect, useState } from 'react'
import { OurContext } from '../../context/Provider'

const SearchFunctionality = ({regionCounts,totalCountries}) => {
    const {search,setSearch,filter,setFilter} = useContext(OurContext);
   
   
    const handleInputChange = (event) => {
      setSearch(event.target.value)
    }
    
    const handleSelectChange = (event) => {
      setFilter(event.target.value);
    }
    
  return (
    <section className='search-section'>
        <div className='search-div'>
            <input type="text" placeholder='Search Country' name='search' value={search} onChange={(e)=>handleInputChange(e)}/>
        </div>
        <div className='dropdown-div'>
            <select name="filter" value={filter} onChange={(e)=>handleSelectChange(e)}>
            <option value="All">All ({totalCountries})</option> 
            {regionCounts &&
                Object.entries(regionCounts).map(([regionName, count]) => (
                <option key={regionName} value={regionName}>
                {regionName} ({count}) 
              </option>
            ))}
            </select>
        </div>
    </section>
  )
}

export default memo(SearchFunctionality)

