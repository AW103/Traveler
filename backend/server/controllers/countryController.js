const express = require("express");
const axios = require("axios");
const trips = require("../db.json");
let globalID = 0;

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
getCountry: async (req,res) => {
  await axios(countryConfig)
  .then((response) => {
    let countries = response.data
    let country = countries.map((obj) => {
      return obj.name.common
    })
 let randomCountry = country[Math.floor(Math.random() * (country.length))]
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
    let countriesArr = allCountryInfo.filter((obj) => {
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
},
getTrips: (req,res) => {
  res.status(200).send({trips})
  console.log(`getTrips has ${trips[0].country}`);
},
addTrip: (req,res) => {
  const {country, city} = req.body;
  console.log(country,city);
  let newTrip = {
    id: globalID,
    city,
    country
  }
  trips.push(newTrip);
  console.log(trips);
  res.status(200).send("Trip added!");
  globalID++
},
deleteTrip: (req,res) => {
  let {id} = +req.params
  let index = trips.findIndex((elem) => elem.id === id);
  trips.splice(index,1);
  res.status(200).send(trips);
}
};