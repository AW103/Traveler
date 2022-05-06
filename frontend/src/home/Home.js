import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import "./home.css";

const Home = () => {
    const button =
        <div className="beginBtn">
            <Link to="tripCard" className="btn btn-outline">
                Let's begin
            </Link>
        </div>
return (
    <main className="px-3 mb-auto">
        <div className="welcome-div">
         <h1 className="greeting">"The world is yours"</h1>
        {button}
        </div>
    </main>
)
}

export default Home;