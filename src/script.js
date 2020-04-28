//like launch.js server.js
var express = require("express");
var mysql = require("mysql");
var app = express();

var connection = mysql.createConnection({
  //external - stub
  host: "localhost",
  user: "Heather",
  password: "B4ubl3s!",
  database: "pets"
});

app.set("view engine", "pug"); //mock and check it's being called

connection.connect(function(error) {
  //want to know that each branch of the condition are accessed could abstract this out
  if (error) {
    console.log("Error");
  } else {
    console.log("Connected");
  }
});

app.get("/", function(request, response) {
  //abstract this function and test separately
  connection.query("SELECT * FROM cats", function(error, results) {
    if (error) {
      console.log("Error in the query");
    } else {
      response.render("index", { title: "Beans", message: results[1].name });
      console.log("Success");
      console.log(results[1].name);
    }
  });
});

app.listen(1337);
