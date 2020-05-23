import express from 'express';
import { createServer } from '../src/server';
import { initialiseRoutes } from '../src/routes';

////////
// TODO: tidy this up, move setup into a before each and make sure you restore mocks in the after each
////////

jest.mock('express'); // mocking the express module - hoist
jest.mock('../src/routes'); // mocks the module coming from this location

describe('server.js', () => {
	const mockExpressUse = jest.fn(); // mocking the express.use function
	const mockExpressGet = jest.fn(); // mocking the express.get function
	const mockRouter = {};

	const fakeExpress = {
		// creating a fake Express object with a fake use and get method
		use: mockExpressUse,
		get: mockExpressGet
	};

	// const fakeRouter = { // creating a fake router with the fake get method
	//   get: mockExpressGet,
	// };

	describe('createServer', () => {
		beforeEach(() => {
			initialiseRoutes.mockImplementation(() => mockRouter);

			express.mockImplementation(() => {
				return fakeExpress;
			});
		});

		afterEach(() => {
			jest.restoreAllMocks();
		});

		it('should create an Express server', () => {
			createServer();

			expect(express).toHaveBeenCalled();
		});

		it('should call app.use with initialiseRoutes', () => {
			createServer();

			expect(fakeExpress.use).toHaveBeenCalledWith(mockRouter);
		});

		it('should return app', () => {
			const app = createServer();

			expect(app).toEqual(fakeExpress);
		});
	});

	// describe('startServer', () => {
	//   beforeEach(() => {

	//   });

	//   afterEach(() => {

	//   });

	//     it('should call listen with value ', () => {
	//       startServer(fakePort);

	//       expect(fakeApp.listen).toHaveBeenCalledWith(fakePort);
	//     });

	//     it('should ', () => {

	//     });
	// });
});
