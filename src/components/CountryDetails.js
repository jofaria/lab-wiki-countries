import { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CountryDetails({ countriesDataObj }) {
  const [detailsList, setDetailsList] = useState(null);

  const { countryId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const requestedCountry = countriesDataObj.find((oneCountry) => {
      return oneCountry.alpha3Code === countryId;
    });

    setDetailsList(requestedCountry);
  }, [countryId]);

  if (!detailsList) {
    return (
      <div className="col-7">
        <p>Country not found</p>
      </div>
    );
  }

  return (
    <div className="col-7">
      {detailsList && (
        <div>
          <img
            width="150"
            src={`http://www.geognos.com/api/en/countries/flag/${detailsList.alpha2Code}.png`}
            alt="country-flag"
          />{' '}
          <h1>{detailsList.name.common}</h1>
          <h3>{detailsList.alpha3Code}</h3>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{detailsList.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {detailsList.area}
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  {detailsList.borders.map((borderCountry) => {
                    return (
                      <ul key={borderCountry}>
                        <li>
                          <Link to={'/' + borderCountry}>
                            {
                              countriesDataObj.find((country) => {
                                return country.alpha3Code === borderCountry;
                              }).name.common
                            }
                          </Link>
                        </li>
                      </ul>
                    );
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
