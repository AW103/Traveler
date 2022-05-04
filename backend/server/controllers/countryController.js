const express = require("express");
const axios = require("axios");

const config = {
  method: 'get',
  url: 'https://restcountries.com/v3.1/all',
  headers: { },
};



module.exports = {
getCountry: async (req,res) => {
  await axios(config)
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
}
};