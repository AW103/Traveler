import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import postman from "../api/url";

const AddTrip = ({country, city}) => {
    const [response, setResponse] = useState(null)
console.log(`country is ${country}, city is ${city}`);
    const body = {
        country: country,
        city: city
    }
    const handleAddTripClick = async () => {
        console.info("Add trip Button was clicked");
    let res = await postman.post("/addTrip",body);
       setResponse(res.data)
      };
return (
<section>
    <Button variant="outline-warning" className="addTripBtn" onClick={handleAddTripClick}>Add trip</Button>
    {response !== null ? <Link to="/tripProfile" className="viewTripsBtn btn btn-outline-success">Click to view trips</Link> : null}
    </section>
)
}

export default AddTrip;