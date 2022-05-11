const express = require("express");
const axios = require("axios");
const trips = require("../db.json");
const weatherAPI = process.env.WEATHER_KEY;

const countryConfig = {
  method: 'get',
  url: 'https://restcountries.com/v3.1/all',
  headers: { },
};
const cityConfig = {
  method: 'get',
  url: 'https://countriesnow.space/api/v0.1/countries',
  headers: { },
};

module.exports = {
  getCode: async (req,res) => {
    const country = req.query.country
    console.log(`getCode requested`);
    let countryCode;
    await axios(countryConfig).then((response) => {
        let countries = response.data
         countries.map((obj) => {
          if(obj.name.common === country) {
           countryCode = obj.cca2
           return; 
            }
        })
      }).catch((error) => {
        console.log(error);
      });
      console.log(`countryCode is ${countryCode}`);
      res.status(200).send(countryCode)
  },
getCountry: async (req,res) => {
  await axios(countryConfig)
  .then((response) => {
    let countries = response.data
    let countriesArr = countries.map((obj) => {
      return obj.name.common
    })
 let randomCountry = countriesArr[Math.floor(Math.random() * (countriesArr.length))]
 console.log(randomCountry);
    res.status(200).send(randomCountry)
  })
  .catch((error) => {
    console.log(error);
  });
},
getCity: async (req,res) => {
 const country = req.query.country
 let citiesArr = [];
//  console.log(`country is ${country}`);
  await axios(cityConfig).then((response) => {
    let allCountryInfo = response.data.data
  allCountryInfo.filter((obj) => {
   if(obj.country == country){
   citiesArr = obj.cities
   }
   return citiesArr
    })   
    let randomCity = citiesArr[Math.floor(Math.random() * (citiesArr.length))]
    console.log(randomCity);
    if(randomCity) {
       res.status(200).send(randomCity)
    } else if(citiesArr && randomCity === undefined) {
      res.status(200).send("none")
    }
     })
     .catch((error) => {
       console.log(error);
     });
}
};