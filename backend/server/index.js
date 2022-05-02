require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("*", (_req, res) => {
    res.sendStatus(404);
  });




const port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if(err) {
        console.error(err);
    }
    console.log(`Server rocking out on ${port}`)
});
