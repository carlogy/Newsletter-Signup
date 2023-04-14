const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {

    res.sendFile(__dirname + "/signup.html");
    // res.send("Successully loaded!")
})

app.listen(3000, function() {
    console.log("Server running on port: 3000.");
})