// src/App.js
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import countriesData from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countriesDataObj={countriesData} />

          <Routes>
            <Route
              path="/:countryId"
              element={<CountryDetails countriesDataObj={countriesData} />}
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
