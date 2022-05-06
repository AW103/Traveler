import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import postman from "../api/url";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";

const GetCity = ({ country }) => {
  const [city, setCity] = useState([]);
  console.log(`country is ${country}`);
  let message = `Let's get a city next.`;

  const handleClick = async () => {
    console.info("Button was clicked");
    const response = await postman.get("/getCity", {
      params: { country: `${country}` },
    });
    if (response.data !== "none") {
      setCity(`How does ${response.data} sound?`);
    } else if (response.data === "none") {
      setCity(
        "Not a city in sight. You can travel the country all in one trip!"
      );
    }
    console.log(response.data);
  };

  return (
    <section className="citySection">
      <h2>{message}</h2>
      <Button className="cityBtn" onClick={handleClick}>
        Click for a city
      </Button>
      <h2>{city}</h2>
      </section>
  );
};

export default GetCity;
