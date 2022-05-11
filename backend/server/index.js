require("dotenv").config();

const express = require("express");
const cors = require("cors");
const {getCountry, getCity, getCode} = require("./controllers/locationController")
const {addTrip, getTrips, deleteTrip} = require("./controllers/tripController")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// app.use(express.static(`${__dirname}/../build`));

app.get("/getCountry", getCountry);
app.get("/getCity", getCity);
app.get("/getCode", getCode);
app.get("/getTrips", getTrips);
app.post("/addTrip", addTrip);
app.delete("/deleteTrip/:id", deleteTrip);


app.use("*", (_req, res) => {
    res.sendStatus(404);
  });
const port = process.env.PORT || 3001;

app.listen(port, (err) => {
    if(err) {
        console.error(err);
    }
    console.log(`Server rocking out on ${port}`)
});
