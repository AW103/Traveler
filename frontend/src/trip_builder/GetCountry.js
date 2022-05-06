import React, { useState } from "react";
import { Link } from "react-router-dom";
import postman from "../api/url";
import TripCard from "./TripCard";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./getCountry.css";
import GetCity from "./GetCity";

const GetCountry = () => {
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState([]);
  let message =  "";
  const handleClick = async () => {
    console.info("Button was clicked");
     await postman.get("/getCountry").then((response) => {
        setCountry(`You're going to ${response.data}!`);
        setCity(response.data);
        message =  `${country} sounds great! Now let's get a city.`
    });
  };

  return (
    <Container>
        <h2>First, we need a country. </h2>
      <Button className="countryBtn" onClick={handleClick}>
        Click for a country
      </Button>
      <TripCard country={country} message={message}/>
      <GetCity country={city} />
      {/* <Button className="countryBtn" onClick={handleClick}>{cityButton}</Button> */}
    </Container>
  );
};

export default GetCountry;
