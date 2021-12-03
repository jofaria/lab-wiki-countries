import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function CountriesList() {
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      setCountriesList(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countriesList.map((eachCountry) => {
          return (
            <Link
              key={eachCountry.alpha3Code}
              className="list-group-item list-group-item-action"
              to={'/' + eachCountry.alpha3Code}
            >
              <img
                width="50"
                src={`http://www.geognos.com/api/en/countries/flag/${eachCountry.alpha2Code}.png`}
                alt="country-flag"
              />
              <p>{eachCountry.name.common}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
