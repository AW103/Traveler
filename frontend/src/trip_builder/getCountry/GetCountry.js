import React, { useState } from "react";
import postman from "../../api/url";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import "./getCountry.css";
import GetCity from "../getCity/GetCity";

const GetCountry = () => {
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState(null);

  const handleClick = async () => {
    console.info("Button was clicked");
    let response = await postman.get("/getCountry");
    setCountry(`${response.data}?? Nice!`);
    setCity(response.data);
    return response.data;
  };

  return (
    <div className="tripInfo">
      <Container className="tripCard">
          <section className="countrySection">
            <div className="country">
            <h2 className="countryName">{country}</h2>
            <Button className="countryBtn btn-secondary" onClick={handleClick}>
              Click for a country
            </Button>
            </div>
          </section>
      </Container>
      {city !== null ? (
        <Container className="tripCard">
          <section className="citySection"><GetCity country={city} /></section>
        </Container>
      ) : null}
  
    </div>
  );
};

export default GetCountry;
