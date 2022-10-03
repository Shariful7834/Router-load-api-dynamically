import React from "react";
import { useLoaderData } from "react-router-dom";

const CountryDetails = () => {
  const details = useLoaderData()[0];
  const { name, languages, area } = details;
  // console.log(details);
  return (
    <div>
      <h1>Country Details</h1>
      <h2>Country: {name.common}</h2>
      <h3>Language: {languages?.eng}</h3>
      <h3>Area: {area}</h3>
    </div>
  );
};

export default CountryDetails;
