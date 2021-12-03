import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CountriesList({ countriesObj }) {
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    setCountriesList(countriesObj);
    console.log(countriesList);
  }, []);

  return (
    <div className="col-5">
      <div className="list-group">
        {countriesList.map((eachCountry) => {
          return (
            <div
              key={eachCountry.alpha3Code}
              className="list-group-item list-group-item-action"
              style={{ maxHeight: '90vh', overflow: 'scroll' }}
            >
              <img
                src="https://www.countryflags.io/AW/flat/32.png"
                alt="country-flag"
              />
              <Link to={'/' + eachCountry.alpha3Code}>
                <p>{eachCountry.name.common}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
