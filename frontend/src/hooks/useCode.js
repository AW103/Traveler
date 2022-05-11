import { useState } from "react";
import postman from "../api/url";

const useCode = () => {
    const [countryCode, setCountryCode] = useState(null)

    const getCode = async (country) => {
        if(countryCode === null) {
            console.log(`countryCode has no country but get code was called`);
        }
        const response = await postman.get("/getCode", {
            params: {country: `${country}`}
        })
        setCountryCode(response.data)
    }
    console.log(`countryCode set as ${countryCode}`);
    return [countryCode, getCode]
}

export default useCode;