import React, { useState } from "react";
import "./tripCard.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row"
import GetCity from "./GetCity";
import GetCountry from "./GetCountry";

const TripCard = () => {

// console.log(`country is ${country}`);
  return (
    <section className="tripCard">
    <Card className="mt-5 mx-auto" style={{ width: "30rem", border: "none"}}>
      <h1>Adventure awaits!</h1>
      <h2>First,let's find a country.</h2>
        <Row>
          <GetCountry/>
        </Row>
    </Card> 
    </section>
  );
};

export default TripCard;
