//like launch.js server.js
import express from 'express';
// import mysql from 'mysql';
import { createDatabaseConnection } from './databaseConnection';

let app = express();
app.set('view engine', 'pug'); //mock and check it's being called

// let connection = mysql.createConnection({
//   //external - stub
//   host: 'localhost',
//   user: 'Heather',
//   password: 'B4ubl3s!',
//   database: 'pets'
// });

// connection.connect(function(error) {
//   //want to know that each branch of the condition are accessed could abstract this out
//   if (error) {
//     console.log('Error');
//   } else {
//     console.log('Connected');
//   }
// });
let connection = createDatabaseConnection();

app.get('/', function(request, response) {
	//abstract this function and test separately
	connection.query('SELECT * FROM cats', function(error, results) {
		if (error) {
			console.log('Error in the query');
		} else {
			response.render('index', { title: 'Beans', message: results[1].name });
			console.log('Success');
			console.log(results[1].name);
		}
	});
});

app.listen(1337);
