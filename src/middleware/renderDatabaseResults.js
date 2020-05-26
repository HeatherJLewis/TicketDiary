import { createDatabaseConnection } from '../databaseConnection';
import databaseSecrets from '../../databaseSecrets';

const renderDatabaseResults = (request, response) => {
	let connection = createDatabaseConnection(databaseSecrets);

	connection.query('SELECT * FROM cats', function(error, results) {
		if (error) {
			console.log('Error in the query');
		} else {
			response.render('database', { title: 'Beans', message: results[1].name });
			console.log('Success');
			console.log(results[1].name);
		}
	});
};

export default renderDatabaseResults;
