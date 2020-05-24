import mysql from 'mysql';
import { createDatabaseConnection } from '../src/databaseConnection';

jest.mock('mysql');

describe('databaseConnection', () => {
	const mockConnect = jest.fn();

	const fakeConnection = {
		connect: mockConnect
	};

	beforeEach(() => {
		mysql.createConnection.mockImplementation(() => {
			return fakeConnection;
		});
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('should create a database connection instance', () => {
		createDatabaseConnection();

		expect(mysql.createConnection).toHaveBeenCalled();
	});

	it('should connect to the database', () => {
		createDatabaseConnection();

		expect(fakeConnection.connect).toHaveBeenCalled();
	});

	it('should return connection', () => {
		let connection = createDatabaseConnection();

		expect(connection).toEqual(fakeConnection);
	});
});
