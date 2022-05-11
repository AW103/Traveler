import React from "react";
import useCode from "../hooks/useCode";
// import postman from "../api/url";
import "./tripCard.css";
import DeleteTrip from "./DeleteTrip";

const TripCard = ({id, city, country}) => {
    const [countryCode, getCode] = useCode([]);
    if(city === "none") {
        city =  "No city needed. Hello"
    }
    getCode(country)
console.log(`tripCard is receving code ${countryCode}`);
   return (

        <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="tripLocation pt-5 mt-4 mb-4 display-6 lh-1 fw-bold">{city}, {country}</h2>
            <ul className="d-flex list-unstyled mt-auto">
            <li className="explore me-auto d-flex align-items-center">
               Explore
              </li>
            <li className="weather d-flex align-items-center me-3">Weather</li>
            <li className="remove d-flex align-items-center"><DeleteTrip id={id}/></li>
                </ul>
            </div>
            </div>
        </div>
   )
}

export default TripCard;