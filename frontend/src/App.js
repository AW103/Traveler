import React from "react";
// import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import GetCountry from "./components/GetCountry"

const App = () => {
    return (
        <div className="d-flex h-100 w-100">
            <header>Traveler</header>
            <GetCountry />
            {/* <Routes>
                <Route path={"/getCountry"} element={<GetCountry />} />
            </Routes> */}
        </div>
    )
}

export default App;