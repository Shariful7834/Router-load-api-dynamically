import React from "react";
import { useLoaderData } from "react-router-dom";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const countries = useLoaderData();
  // console.log(countries);
  return (
    <div>
      <h1>All Countries page: {countries.length}</h1>

      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
