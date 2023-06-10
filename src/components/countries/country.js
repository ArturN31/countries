import React from 'react';
import { useNavigate } from "react-router-dom";

function Country(props) {
  const navigate = useNavigate();

  const handleClick = (country) => {
    console.log(country);
    navigate('/countryPage', {state: {country}})
  }

  return (
    <>
      <button className='m-3 
      text-orange-peel
      border-paynes-gray border-2 
      bg-paynes-gray/[0.2]
      grid justify-items-center 
      hover:bg-orange-peel/[0.05]
      hover:border-orange-peel/[0.5]' 
      onClick={() => {handleClick(props.country)}}>
        {props.country.flags && props.country.flags.alt && props.country.flags.svg
          ? <img src={props.country.flags.svg} alt={props.country.flags.alt} className='2xl:aspect-[8/5] lg:aspect-[8/5] md:aspect-[8/5] sm:aspect-[10/5] aspect-[8/4]' loading="lazy" />
          : <img src={props.country.flags.svg} alt="" className='2xl:aspect-[8/5] lg:aspect-[8/5] md:aspect-[8/5] sm:aspect-[10/5] aspect-[8/4]' loading="lazy" />
        }
        <h1 className='text-2xl my-4'>{props.country.name.common}</h1>

      </button>
    </>
  );
}

export default Country;