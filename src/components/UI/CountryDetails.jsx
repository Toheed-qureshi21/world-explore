import { useQuery } from '@tanstack/react-query';
import React, { memo, useContext } from 'react'
import { useNavigate, useNavigation, useParams } from 'react-router-dom'
import { individualData } from '../../API/api';
import { OurContext } from '../../context/Provider';
import { IoArrowBackOutline } from "react-icons/io5";
import ErrorComponent from "../UI/ErrorComponent"
import Loader from './Loader';
const CountryDetails = () => {
    const {id} = useParams();
    const {theme} = useContext(OurContext);
    const navigation = useNavigation();
    const {data,isLoading,isError,error} = useQuery({
        queryKey:["country",id],
        queryFn:()=>individualData(id),
        
    });
    const navigate = useNavigate();    
    if (isLoading || navigation.state==="loading") {
        return <Loader/>
    }
    if (isError || !data || !data.length) {
        return <ErrorComponent/>

    }
    else{

    
  return (
        <section className={`container country-section ${theme==="dark"?"theme-dark":"theme-light"}`}>
            {
                data && (
                <div className='big-card-container grid grid_two--cols'>
                    <div className='big-card-image'>
                        <img src={data[0]?.flags.svg} alt="" />
                    </div>
                    <div className='big-card-content'>
                    <p>Official Name : {data[0]?.name.official}</p>
                    <p>Common Name : {data[0]?.name.common}</p>
                    <p>Region : {data[0]?.region}</p>
                    <p>Subregion : {data[0]?.subregion}</p>
                    <p>Capital : {data[0]?.capital}</p>
                    <p>Domain : {data[0]?.tld[0]}</p>
                    <p>
             Currencies:{' '}
                {Object.values(data[0]?.currencies)
              .map((curr) => {
                const currencyData = curr.name + " (" + curr.symbol + ")";
                return currencyData;
              })
              .join(', ')}
          </p>
                    <p>Languages : {data[0]?.languages.eng}</p>
                    <button className='big-btn' onClick={()=>navigate(-1)}>
                        <span>Go Back</span>
                       <IoArrowBackOutline  className='icon-arrow'/>
                        </button>
                    </div>
                </div>
                )
                 }
        </section>
  )
}
}
export default memo(CountryDetails);
