import mysql from 'mysql';
import { createDatabaseConnection } from '../src/databaseConnection';

jest.mock('mysql');

describe('databaseConnection', () => {
	const mockCreateConnection = jest.fn();
	const mockConnect = jest.fn();

	const fakeMysql = {
		createConnection: mockCreateConnection
	};

	const fakeCreateConnection = {
		connect: mockConnect
	};

	beforeEach(() => {
		mysql.mockImplementation(() => {
			return fakeMysql;
		});

		mysql.createConnection.mockImplementation(() => {
			return fakeCreateConnection;
		});
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('should create a database connection', () => {
		createDatabaseConnection();

		expect(mysql.createConnection).toHaveBeenCalled();
	});
});
