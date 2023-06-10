import React from 'react';

import { useLocation, useNavigate  } from "react-router-dom";

function CountryPage() {
    let params = useLocation();
    const navigate = useNavigate();

    let country = params.state.country;
    
    //getting official country name
    let getNativeName = "";
    let getNativeNameChildrenKey = "";
    let getOfficialCountryName = "";

    if(country.name.nativeName) {
        getNativeName = [country.name.nativeName][0];
        getNativeNameChildrenKey = Object.keys(getNativeName);
        getOfficialCountryName = getNativeName[getNativeNameChildrenKey[0]].official;
    }

    //getting all languages
    let languages = "";
    let getLanguageValues = "";

    if(country.languages) {
        languages = [country.languages][0];
        getLanguageValues = Object.values(languages);
    }

    const handleClick = () => {
        navigate(-1);
    }

    return (
        <div className='p-3 min-h-screen bg-dark'>
            <button onClick={() => {handleClick();}} className='text-beige p-3 m-3 border-green border-2 w-32 hover:bg-mint/[0.2]'>
                <p>Go back</p>
            </button>
            <div className='m-3 text-beige text-center'>
                {country.name.common
                    ?   <p className='text-4xl my-2'>{country.name.common}</p>
                    :   ""
                }
                
                {getOfficialCountryName
                    ?   <p className='text-2xl'>{getOfficialCountryName}</p>
                    :   ""
                }
                
                {country.region
                    ?   <p className='text-xl mt-3'>{country.region}</p>
                    :   ""
                }
                
                {country.subregion
                    ?   <p className='text-xl mb-10'>{country.subregion}</p>
                    :   ""
                }

                {country.flags && country.flags.alt && country.flags.svg
                    ?   <div className='flex justify-center'>
                            {country.coatOfArms && country.coatOfArms.svg
                                ?   <div className='grid 2xl:grid-cols-2 sm:grid-cols-2 grid-cols-1 
                                                    mx-10 px-10 xl:w-4/6'>
                                        <div className='grid grid-cols-1'>
                                            <p className='text-2xl h-fit'>Flag</p>
                                            <img src={country.flags.svg} alt={country.flags.alt} className='mx-auto p-5 xl:w-3/5 md:w-3/8'/>
                                        </div>
                                        <div className='grid grid-cols-1'>
                                            <p className='text-2xl h-fit'>Coat of Arms</p>
                                            <img src={country.coatOfArms.svg} alt="" className='mx-auto p-5 xl:w-2/5 md:w-2/3'/>
                                        </div>
                                    </div>
                                :   <div className='grid grid-cols-1'>
                                        <p className='text-2xl'>Flag</p>
                                        <img src={country.flags.svg} alt={country.flags.alt} className='mx-auto p-5'/>
                                    </div>
                            }
                        </div>
                    :   <div className='flex justify-center'>
                            {country.coatOfArms && country.coatOfArms.svg
                                ?   <div className='grid 2xl:grid-cols-2 sm:grid-cols-2 grid-cols-1'>
                                        <div className='grid grid-cols-1'>
                                            <p className='text-2xl h-fit'>Flag</p>
                                            <img src={country.flags.svg} alt="" className='mx-auto p-5'/>
                                        </div>
                                        <div className='grid grid-cols-1'>
                                            <p className='text-2xl h-fit'>Coat of Arms</p>
                                            <img src={country.coatOfArms.svg} alt="" className='mx-auto p-5'/>
                                        </div>
                                    </div>
                                :   <div className='grid grid-cols-1'>
                                        <p className='text-2xl'>Flag</p>
                                        <img src={country.flags.svg} alt="" className='mx-auto p-5'/>
                                    </div>
                            }
                        </div>
                }

                {country.capital
                    ?   <>
                            <p className='text-2xl mt-10'>Capital City:</p>
                            <p className='text-2xl'>{country.capital[0]}</p>
                        </>
                    :   <p className='text-2xl mt-10'>There is no capital city</p>
                }

                {country.capitalInfo.latlng
                    ?   <p className='text-xl'>
                            ({country.capitalInfo.latlng[0]}, {country.capitalInfo.latlng[1]})
                        </p>
                    :   ""
                }
                

                {country.population
                    ?   <>
                            <p className='text-2xl mt-10'>Population:</p>
                            <p className='text-2xl'>{country.population.toLocaleString("en-GB")}</p>
                        </>
                    :   ""
                }

                {country.area
                    ?   <>
                            <p className='text-2xl mt-10'>Area:</p>
                            <p className='text-2xl'>{country.area.toLocaleString("en-GB")} km<sup>2</sup></p>
                        </>
                    :   ""
                }

                {getLanguageValues
                    ?   <>
                            <p className='text-2xl mt-10'>Languages:</p>
                            <ol className='text-xl'>
                                {getLanguageValues.map((language, index) => <li key={index}>{language}</li>)}
                            </ol>
                        </>
                    :   ""
                }

                {country.car.side
                    ?   <p className='text-2xl mt-10'>{country.car.side.charAt(0).toUpperCase()}{country.car.side.slice(1)}-hand traffic</p>
                    :   ""
                }
                
            </div>
        </div>
    );
}

export default CountryPage;