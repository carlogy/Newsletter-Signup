const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.get("/", function(req, res) {
    res.send("Successully loaded!")
})

app.listen(3000, function() {
    console.log("Server running on port: 3000.");
})