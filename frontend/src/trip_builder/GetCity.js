import React, {useState} from "react";
import { Link } from "react-router-dom";
import postman from "../api/url";
import TripCard from "./TripCard";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";


const GetCity = ({country}) => {
    const [city, setCity] = useState([]);
    console.log(country);
    const handleClick = async () => {
        console.info("Button was clicked");
        const response = await postman.get("/getCity", { params: {country: `${country}`}});
        if(response.data !== "none"){
            setCity(`How does ${response.data} sound?`)
        } else if(response.data === "none"){
            setCity("Not a city in sight. You can travel the country all in one trip!")
        }
        console.log(response.data);
    };
    
    return(
        <Container>
            <Button className="countryBtn" onClick={handleClick}>Click for a city</Button>
            <TripCard city={city}/>
            </Container>
    )
    
};
    
    export default GetCity;