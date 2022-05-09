import React from "react";
import "./tripBuilder.css";
import GetCountry from "./getCountry/GetCountry";

const TripBuilder = () => {

  return (
    <main className="tripBuilder d-flex h-100 w-100 mx-auto flex-column">
      <h1>Adventure awaits!</h1>
      <section className="cardSection">
      <h2>First,let's find a country.</h2>
      <div className="card-deck">
        <GetCountry />
    </div>
    </section>
  </main>
  );
};

export default TripBuilder;
