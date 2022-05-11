import React, { useState } from "react";
import postman from "../../api/url";
import Button from "react-bootstrap/esm/Button";
import AddTrip from "../../addTrip/AddTrip";

const GetCity = ({ country }) => {
  const [city, setCity] = useState(null);
  const [addCity, setAddCity] = useState(null);
  // console.log(`country is ${country}`);
  let message = `Let's get a city next.`;

  const handleGetCityClick = async () => {
    console.info("GetCity Button was clicked");
    const response = await postman.get("/getCity", {
      params: { country: `${country}` },
    });
    response.data !== "none" ? setCity(`How does ${response.data} sound?`) : setCity(
        "Not a city in sight. You can travel the country all in one trip!"
      );
    // console.log(response.data);
    setAddCity(response.data);
  };

  return (
    <div className="city">
      <div>
        <h2>{message}</h2>
        <Button className="cityBtn btn-secondary" onClick={handleGetCityClick}>
          Click for a city
        </Button>
        <h2>{city}</h2>
      </div>
        {country !== null && city !== null ? (
          <div className="addTripDiv">
            <div className="restart">
            <Button
            className="startOver"
              variant="outline-secondary"
              onClick={() => window.location.reload(false)}
            >
              Start over?
            </Button>
          </div>
          <div className="addTrip">
            <AddTrip country={country} city={addCity}/>
            </div>
          </div>
        ) : null}
      </div>
  );
};

export default GetCity;
