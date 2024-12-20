import React, { useContext } from 'react'
import countryFacts from "../../API/countryFacts.json"
import { OurContext } from '../../context/Provider'
import Loader from '../UI/Loader';
import { useNavigation } from 'react-router-dom';
const About = () => {
  const {theme} = useContext(OurContext);
  const navigation = useNavigation();

  if (navigation.state==="loading") {
    return <Loader/>
  }
  return (
   
       <section className={`hero-second-section container ${theme==="dark"?"theme-dark":"theme-light"}`} id='about'>
            <h3>Here are the interesting facts</h3>
            <ul className='grid grid_three--cols card-container'>
              {
                countryFacts.map((curr)=>{
                  return (
                    <li key={curr.id} className='card'>
                        <h4>{curr.name}</h4>
                        <p><span>Capital : </span>{curr.capital}</p>
                        <p><span>Population : </span>
                    {curr.population >= 1000000    
                      ? (curr.population / 1000000) % 1 === 0 
                ? `${curr.population / 1000000}M` 
                : `${(curr.population / 1000000).toFixed(2)}M` 
               : curr.population}
               </p>
                        <p><span>Interesting Facts : </span>{curr.facts}</p>
                    </li>
                  )
                })
              }
            </ul>
          </section>
  
  )
}

export default About
