var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'Heather',
  password: 'B4ubl3s!',
  database: 'pets'
});
app.set('view engine', 'pug');

connection.connect(function(error) {
  //callback
  if (error) {
    console.log('Error');
  } else {
    console.log('Connected');
  }
});

app.get('/', function(request, response) {
  connection.query('SELECT * FROM cats', function(error, results) {
    if (error) {
      console.log('Error in the query');
    } else {
      response.render('index', { title: 'Beans', message: results[0].name });
      console.log('Success');
      console.log(results[0].name);
    }
  });
});

app.listen(1337);
