import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GetCountry from "./trip_builder/getCountry/GetCountry";
import GetCity from "./trip_builder/getCity/GetCity";
import AddTrip from "./addTrip/AddTrip";
import TripProfile from "./tripProfile/TripProfile";
import Header from "./header/Header";
import "./app.css";
import Home from "./home/Home";
import TripBuilder from "./trip_builder/TripBuilder";


const App = () => {


  return (
    <main className="appPage">
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="tripBuilder" element={<TripBuilder/>} />
        <Route path="getCountry" element={<GetCountry />} /> 
        <Route path="getCity" element={<GetCity />} />
        <Route path="addTrip" element={<AddTrip />} />
        <Route path="/tripProfile" element={<TripProfile />} />
      </Routes>
    </main>
  );
};

export default App;
