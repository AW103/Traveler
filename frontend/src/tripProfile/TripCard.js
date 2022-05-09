import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./tripCard.css";
import DeleteTrip from "./DeleteTrip";

const TripCard = ({id, message, city, country}) => {
    console.log(city, country);
    if(city === "none") {
        city =  "No city needed. Hello"
    }
console.log(message);
   return (
       <Container className="px-4 py-5" id="custom-cards">
           {/* {message ? message : null} */}
        <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="pt-5 mt-4 mb-4 display-6 lh-1 fw-bold">{city}, {country}</h2>
            <ul className="d-flex list-unstyled mt-auto">
            <li className="me-auto">
               Explore
              </li>
            <li className="d-flex align-items-center me-3">Weather</li>
            <li className="d-flex align-items-center"><DeleteTrip id={id}/></li>
                </ul>
            </div>
            </div>
        </div>
        </Container>
   )
}

export default TripCard;