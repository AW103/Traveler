import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import "./home.css";
import GetCountry from "../trip_builder/GetCountry";

const Home = () => {
    const button =
        <div>
            <Link to="/getCountry" className="btn btn-lg btn-primary">
                Let's begin.
            </Link>
        </div>
return (
    <main className="px-3 mb-auto">
        <div className="welcome-div">
            <h3 className="greeting">Welcome to your new travel guru.</h3>
            {/* <p className="lead">Let's begin.</p> */}
        </div>
        <Button>{button}</Button>
    </main>
)
}

export default Home;