import express from 'express';
import { createServer, startServer } from '../src/server';
import { initialiseRoutes } from '../src/routes';

jest.mock('express');
jest.mock('../src/routes');

describe('server.js', () => {
	const mockExpressUse = jest.fn();
	const mockExpressListen = jest.fn();
	const mockRouter = {};

	const fakeExpress = {
		use: mockExpressUse,
		listen: mockExpressListen
	};

	beforeEach(() => {
		initialiseRoutes.mockImplementation(() => mockRouter);

		express.mockImplementation(() => {
			return fakeExpress;
		});
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	describe('createServer', () => {
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

	describe('startServer', () => {
		it('should call listen with port value', () => {
			const givenPort = 1234;

			startServer(fakeExpress, givenPort);

			expect(fakeExpress.listen).toHaveBeenCalledWith(
				givenPort,
				expect.any(Function)
			);
		});
	});
});
