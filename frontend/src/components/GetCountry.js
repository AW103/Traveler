import React, {useState} from "react";
import postman from "../api/postman";



const GetCountry = () => {
const [country, setCountry] = useState([]);

const handleClick = async () => {
const response = await postman.get()
}

}