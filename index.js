const express = require("express");
const mongoose = require("mongoose");
const mongodb = require("mongodb");
const bodyParser = require("body-parser");

const app = express();

mongoose.connect(
  "mongodb+srv://newUser:123new@cluster0-oixaf.gcp.mongodb.net/GoLiving?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to DB")
);

app.use(bodyParser.json());

async function loadData() {
  const records = await mongodb.MongoClient.connect(
    "mongodb+srv://newUser:123new@cluster0-oixaf.gcp.mongodb.net/admin?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
  return records.db("GoLiving").collection("newapplications");
}

app.get("/", (req, res) => {
  res.send(
    "Welcome to the API page of GoLiving Thre is nothing to see here but you can make a request from your page with adding '/api' to the link to see the current applications:)"
  );
});
