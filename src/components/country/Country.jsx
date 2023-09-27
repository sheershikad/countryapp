import React from "react";
import "./Country.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//redux
import { reset } from "../../features/countries/countriesSlice";
import { useDispatch, useSelector } from "react-redux";
import { showAllCountries } from "../../features/countries/countriesAction";

const Country = () => {
  const { countriesData, loading, success, error } = useSelector(
    (state) => state.country
  );
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showAllCountries());
    if (success) {
      setData(countriesData);
      // console.log(countriesData.length)
    }
    if (error) {
      console.log(error);
    }
  }, [error, countriesData, success, dispatch]);
  // console.log(data.length);
  return (
    <section className="country-container">
      { loading ? ( <div>loading....</div> ) : 
      (
        data.length > 0 &&
        data.map((index, item) => {
          return (
            <Link
              className="country-card"
              key={index} to={`/${item.cioc}`}
              // onClick={() => dispatch(searchByName(item.cioc.toLowerCase()))}
            >
              <img
                src={item.flags.png}
                alt={item.flags.alt}
                className="country-image"
              />
              <div className="country-content">
                <h3> {item.name.common}</h3>
                <p>
                  Population: <span>{item.population}</span>
                </p>
                <p>
                  Region: <span>{item.region}</span>
                </p>
                <p>
                  Capital: <span>{item.capital}</span>
                </p>
              </div>
            </Link>
          );
        })
      )
    }
    </section>
  );
};
export default Country;
