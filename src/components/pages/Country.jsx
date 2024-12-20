import React, { memo, useContext, useEffect } from 'react'
import { OurContext } from '../../context/Provider'
import { useQuery } from '@tanstack/react-query';
import CountryCard from '../UI/CountryCard';
import { gotData } from '../../API/api';
import Loader from '../UI/Loader';
import SearchFunctionality from '../UI/SearchFunctionality';
import { useNavigation } from 'react-router-dom';

const Country = () => {
  const {theme,search,filter} = useContext(OurContext);
  const navigation = useNavigation();
  const {data,isLoading} = useQuery({
    queryKey:["countries"],
    queryFn:gotData,
    staleTime:5*60*1000,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  const searchedCountries = (country) => {
        if (!search) return true
          return country.name.common.toLowerCase().includes(search.toLowerCase());
        
  }
  const filterRegion = (country) => {
    if (filter==="All") {
      return country;
    }
    return country?.region === filter;
  }
  
  const filteredCountries = data?.filter((curr)=>searchedCountries(curr)&&filterRegion(curr));
  const regionCounts = data?.reduce((acc, country) => {
    if (!acc[country.region]) acc[country.region] = 0;
    acc[country.region]++;
    return acc;
  }, {});
  const totalCountries = data?.length;
  
  if (isLoading || navigation.state==="loading") {
    return <Loader/>
  }
  return (
    <section className={`container country-section ${theme==="dark"?"theme-dark":"theme-light"}`}>
          <SearchFunctionality regionCounts={regionCounts} totalCountries={totalCountries}/>
        <ul className='grid grid_three--cols card-container'>
          {filteredCountries && filteredCountries.length > 0 ?( 
            filteredCountries?.map((curr)=>{
              return(
                <CountryCard curr={curr} key={curr.id}/>
              )
            })) : (
              <div style={{width:"100vw",margin:"1rem"}}>
              <p>No Country with that particular search </p>
              </div>
            )
          }
        </ul>
      
        </section>
  )
}

export default memo(Country);
