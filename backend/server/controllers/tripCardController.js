const express = require("express");
const axios = require("axios");
const trips = require("../db.json");
const weatherAPI = process.env.WEATHER_KEY;
let globalID = 0;

const weatherConfig = {
    method: 'get',
    url: `https://api.openweathermap.org/data/2.5/weather?${cityName}&appid=${weatherAPI}`,
    headers: { },
}
const countryConfig = {
    method: 'get',
    url: 'https://restcountries.com/v3.1/all',
    headers: { },
  };

  
  module.exports = {
    //   countriesWithCodes: async (req,res) => {
    //     await axios(countryConfig)
    //     .then((response) => {
    //       let countries = response.data
    //       let countriesArr = countries.map((key, value) => {
    //         key = obj.name.common
    //         value = obj.cca2
    //       })
    //       return countriesArr;
    //     })
    // },
      getTemp: (req,res) => {
          console.log(countriesWithCodes);  
    }
};