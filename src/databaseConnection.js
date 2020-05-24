import mysql from 'mysql';

const createDatabaseConnection = databaseSecrets => {
	let connection = mysql.createConnection(databaseSecrets);

	//   connection.connect(function(error) {
	//     if (error) {
	//       console.log('Error');
	//     } else {
	//       console.log('Connected');
	//     }
	//   });

	return connection;
};

export { createDatabaseConnection };
