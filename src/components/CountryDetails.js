import { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CountryDetails({ countriesDataObj }) {
  const [detailsList, setDetailsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { countryId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const requestedCountry = countriesDataObj.find((oneCountry) => {
      if (oneCountry.alpha3Code === countryId) {
        console.log(oneCountry.alpha3Code);
        console.log('oneCountry', oneCountry);
        return true;
      }
    });

    setDetailsList(requestedCountry);
    setLoading(false);
  }, [countryId]);

  console.log('detailsList', detailsList);
  console.log(typeof detailsList);
  // console.log(detailsList.name.common);
  // console.log(detailsList.name.official);

  if (!detailsList) {
    return <Navigate to="/error" />;
  }

  return (
    <div className="col-7">
      {loading && <p>Loading ...</p>}

      {detailsList && (
        <div>
          <img src="https://restcountries.eu/data/fra.svg" alt="country flag" />
          {/* <h1>{detailsList.name.common}</h1> */}

          <h2>{detailsList.alpha3Code}</h2>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{detailsList.capital}</td>
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
                  {/* {detailsList.map((eachBorder) => {
                    <ul>
                      <li>
                        <Link to={'/' + eachBorder}>{eachBorder}</Link>
                      </li>
                    </ul>;
                  })} */}
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
