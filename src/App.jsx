import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Countries from './components/Countries';
import Pagination from './components/Pagination';

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);
      const res = await axios.get('https://restcountries.com/v2/all');
      setCountries(res.data);
      setLoading(false);
      
    };
    getCountries();
  }, []);

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountries = countries.slice(firstCountryIndex, lastCountryIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Countries countries={currentCountries}/>
      <Pagination countriesPerPage={countriesPerPage} totalCountries={countries.length} paginate={paginate}/>

      {/* <button onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button> */}
    </div>
  )
}

export default App
