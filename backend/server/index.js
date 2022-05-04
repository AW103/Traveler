require("dotenv").config();

const express = require("express");
const cors = require("cors");
const {getCountry} = require("./controllers/countryController")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// app.use(express.static(`${__dirname}/../build`));

app.get("/getCountry", getCountry);


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
