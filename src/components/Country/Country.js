import React from "react";
import { useNavigate } from "react-router-dom";
import "./Country.css";

const Country = ({ country }) => {
  const { name, capital, population, flags } = country;

  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(`/country/${name.common}`);
  };
  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h2>Country: {name.common}</h2>
      <h3>Capital: {capital}</h3>
      <h4>Population: {population}</h4>
      <button onClick={navigateHandler}>See Details</button>
    </div>
  );
};

export default Country;
