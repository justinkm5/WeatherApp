// -- EXPRESS --
var express = require("express");
var app = express();

// -- STATIC PATH
var path = require('path');
app.use(express.static(path.join(__dirname, "./public/dist/public")));

// triggered if routes don't match
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});


// -- BODY-PARSER
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(8000);
