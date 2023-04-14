const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {

    res.sendFile(__dirname + "/signup.html");    
})

app.post("/", function(req, res) {

    var firstName = req.body.fName;
    var lastname = req.body.lName;
    var email = req.body.email;

    console.log(firstName, lastname, email);
})

app.listen(3000, function() {
    console.log("Server running on port: 3000.");
})