// jshint esverison: 6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");


app.listen(3000, () => {
  console.log("Andre 3k listening on the port");
})
