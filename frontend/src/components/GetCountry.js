import React, {useState} from "react";
import postman from "../api/url";
import Button from "react-bootstrap/Button";



const GetCountry = () => {
const [country, setCountry] = useState([]);

const handleClick = async () => {
    console.info("Button was clicked");
    const response = await postman.get("/getCountry");
    setCountry(response.data)
    console.log(country);
};

return(
    <div>
        <Button onClick={handleClick}>Get Started!</Button>
        <h1>{country}</h1>
    </div>
)

}

export default GetCountry;