import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
    const button =
        <div className="beginBtn">
            <Link to="tripBuilder" className="homeBtn btn btn-outline">
                Let's begin
            </Link>
        </div>
return (
    <main className="homePage h-100 w-100 mx-auto">
        <div className="welcome-div">
         <h1 className="greeting">The world is yours.</h1>
        {button}
        </div>
    </main>
)
}

export default Home;