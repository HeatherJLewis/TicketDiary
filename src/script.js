import express from 'express';
import { createDatabaseConnection } from './databaseConnection';
import databaseSecrets from '../databaseSecrets';

let app = express();
app.set('view engine', 'pug');

let connection = createDatabaseConnection(databaseSecrets);

app.get('/', function(request, response) {
	connection.query('SELECT * FROM cats', function(error, results) {
		if (error) {
			console.log('Error in the query');
		} else {
			response.render('index', { title: 'Beans', message: results[1].name });
			console.log('Success');
			console.log(results[1].name);
		}
	});
	console.log(connection);
});

app.listen(1337);
