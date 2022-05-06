import React, { useState } from "react";
import postman from "../api/url";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import "./getCountry.css";
import GetCity from "./GetCity";

const GetCountry = () => {
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState(null);


  const handleClick = async () => {
    console.info("Button was clicked");
     let response = await postman.get("/getCountry");
       setCountry(`${response.data}?? Nice!`);
       setCity(response.data);
       return response.data
      };

 const renderCity = <GetCity country={city}/>

  return (
    <section className="countrySection">
      <h2 className="countryName">{country}</h2>
      <Button className="countryBtn" onClick={handleClick}>
        Click for a country
      </Button>
      <Row>
        {city !== null ? renderCity : null}
      </Row>
      </section>
  );
};

export default GetCountry;
