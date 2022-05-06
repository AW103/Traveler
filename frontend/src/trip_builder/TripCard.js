import React, { useState } from "react";
import "./tripCard.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";

const TripCard = ({ country, city, message }) => {
    console.log(country,city);
    if(country === []) {
      return null;
    }
console.log(`message is ${message}`);
  return (
      <section className="text-center mb-auto jumbotron">
        <h1>{country}</h1>
        <h2>{message}</h2>
        <h2>{city}</h2>
        <div>

    </div>
    </section>
  );
};

export default TripCard;
