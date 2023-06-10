import './Countries.css';

import GetCountries from './components/countries/getCountries';
import CountryPage from '../src/countryPage';

import { Route, Routes, Navigate } from "react-router-dom";

function Countries() {
  return (
    <div className='bg-dark'>
      <section>
        <Routes>
          <Route path='/countryPage' element={<CountryPage/>} />
          <Route path='/countries' element={<GetCountries/>} />
          <Route path='*' element={<Navigate to='/countries' />} />
        </Routes>
      </section>
      <section>
        
      </section>
    </div>
  );
}

export default Countries;
