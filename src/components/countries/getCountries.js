import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Country from './country';
import Header from '../header/header';

function GetCountries() {
  const [countries, setCountries] = useState([]);

  const [Sort, setSort] = useState("");
  const [AZSortedCountries, setAZSortedCountries] = useState([]);
  const [ZASortedCountries, setZASortedCountries] = useState([]);

  const [RegionFilter, setRegionFilter] = useState("");
  const [RegionFilteredCountries, setRegionFilteredCountries] = useState([]);
  const [SubregionFilteredCountries, setSubregionFilteredCountries] = useState([]);

  const fetchCountries = async () => {
    const url = "https://restcountries.com/v3.1/all";

    try {
      const response = await axios.request(url);
      setCountries(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const getRegions = () => {
    let regions = countries.map((country) => (country.region));
    let uniqueRegions = [...new Set(regions)];

    uniqueRegions = uniqueRegions.filter((region) => {
      return region !== undefined;
    })

    return uniqueRegions;
  }

  const getSubregions = () => {
    let subregions = countries.map((country) => (country.subregion));
    let uniqueSubregions = [...new Set(subregions)];

    uniqueSubregions = uniqueSubregions.filter((subregion) => {
      return subregion !== undefined;
    })

    return uniqueSubregions;
  }

  useEffect(() => {
    localStorage.removeItem("countries");
    let storedQuery = JSON.parse(localStorage.getItem("countries"));

    if (!storedQuery) {fetchCountries()} 
    else {setCountries(storedQuery)}
  }, [])

  useEffect(() => {
    localStorage.removeItem("countries");
    localStorage.setItem("countries", JSON.stringify(countries));
  }, [countries])

  useEffect(() => {
    setAZSortedCountries([]);
    setZASortedCountries([]);
    setRegionFilteredCountries([]);
    setSubregionFilteredCountries([]);

    switch(Sort) {
      case "a-z":
        let azSorted = countries.sort((a, b) => a.name.common > b.name.common ? 1 : -1);
        setAZSortedCountries(azSorted);
        break;

      case "z-a":
        let zaSorted = countries.sort((a, b) => a.name.common < b.name.common ? 1 : -1);
        setZASortedCountries(zaSorted);
        break;

      case "region":
        let filteredByRegion = countries.filter(country => country.region === RegionFilter);
        setRegionFilteredCountries(filteredByRegion);
        break;

      case "subregion":
        let filteredBySubregion = countries.filter(country => country.subregion === RegionFilter);
        setSubregionFilteredCountries(filteredBySubregion);
        break;

      default:
        break;
    }
  }, [Sort, RegionFilter])
  
  return (
    <div className='min-h-screen'>
      <section className='grid grid-cols-1'>
        <Header/>
      </section>
      <div className='flex justify-center font-titillium text-xl font-bold'>
        <button className='border-paynes-gray border-4 rounded-lg bg-white p-2 m-2 mt-8 text-center' 
                onClick={() => {setSort("a-z"); setRegionFilter("");}}>A-Z sort</button>
        <button className='border-paynes-gray border-4 rounded-lg bg-white p-2 m-2 mt-8 text-center' 
                onClick={() => {setSort("z-a"); setRegionFilter("");}}>Z-A sort</button>
        {countries
          ? <div >
              <select 
              className='border-paynes-gray border-4 rounded-lg 
              p-2 m-2 mt-8 text-center cursor-pointer' 
              onChange={(e) => {setRegionFilter(e.target.value); setSort("region")}}>
                {countries
                  ? getRegions().sort().map((region, index) => <option key={index} value={region}>{region}</option>)
                  : ""
                }
              </select>
            </div>
          : ""
        }
        {countries
          ? <div >
              <select 
              className='border-paynes-gray border-4 rounded-lg 
              p-2 m-2 mt-8 text-center cursor-pointer' 
              onChange={(e) => {setRegionFilter(e.target.value); setSort("subregion")}}>
                {countries
                  ? getSubregions().sort().map((subregion, index) => <option key={index} value={subregion}>{subregion}</option>)
                  : ""
                }
              </select>
            </div>
          : ""
        }
      </div>
      <div className='grid grid-cols-1 2xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 py-5'>
        {countries && Sort === ""
          ? countries
            .map((country) => (
              <Country key={country.name.common} country={country}/>
            ))
          : ""
        }
        {AZSortedCountries
          ? AZSortedCountries
            .map((country) => (
              <Country key={country.name.common} country={country}/>
            ))
          : ""
        }
        {ZASortedCountries
          ? ZASortedCountries
            .map((country) => (
              <Country key={country.name.common} country={country}/>
            ))
          : ""
        }
        {RegionFilteredCountries
          ? RegionFilteredCountries
            .map((country) => (
              <Country key={country.name.common} country={country}/>
            ))
          : ""
        }
        {SubregionFilteredCountries
          ? SubregionFilteredCountries
            .map((country) => (
              <Country key={country.name.common} country={country}/>
            ))
          : ""
        }
      </div>
    </div>
  );
}

export default GetCountries;