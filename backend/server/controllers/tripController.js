const express = require("express");
const axios = require("axios");
const trips = require("../db.json");
const weatherAPI = process.env.WEATHER_KEY;
let globalID = 0;

module.exports = {
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
}