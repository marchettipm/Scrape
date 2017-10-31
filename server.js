var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

var app = express();


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//var Import routes and give the server access to them.
var routes = require("./controllers/news-controllers.js");

app.use("/", routes);

app.listen(port, () => console.log(`Listening on port ${port}`));

