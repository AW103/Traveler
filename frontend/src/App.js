import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GetCountry from "./trip_builder/GetCountry";
import GetCity from "./trip_builder/GetCity"
import Header from "./header/Header";
// import Nav from "react-bootstrap/Nav";
import Home from "./home/Home";
import TripCard from "./trip_builder/TripCard";


const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(null);

  return (
    <div className="d-flex h-100 w-100 mx-auto flex-column">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getCountry" element={<GetCountry />} />
        <Route path="/TripCard" element={<TripCard />} />
        <Route path="/getCity" element={<GetCity />} />
      </Routes>
    </div>
  );
};

export default App;
