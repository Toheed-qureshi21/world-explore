import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const CountryCard = ({curr}) => {
  return (
       <li key={curr.id} className='main-card'>
        <div className='flag-image'>
            <img src={curr.flags.svg} alt="flags" />
        </div>
        <div>
            <p>{curr.name.common}</p>
            <p>Population :{curr.population >= 1000000    
                      ? (curr.population / 1000000) % 1 === 0 
                ? `${curr.population / 1000000}M` 
                : `${(curr.population / 1000000).toFixed(2)}M` 
               : curr.population}</p>
         <p>Region : {curr.region}</p>
         <p>Capital : {curr.capital}</p>
         <NavLink to={`/country/${curr.name.common}`} style={{all:"unset"}} >
         <button className='hero-btn country-btn'>Read More <FaArrowRight className='country-btn-icon'/></button>
         </NavLink>
        </div>
      </li>
    
  )
}

export default CountryCard
