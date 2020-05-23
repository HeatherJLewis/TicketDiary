import express from 'express';
import { initialiseRoutes } from '../src/routes';

jest.mock('express');

describe('routes.js', () => {
	const mockRouter = jest.fn();
	const mockGet = jest.fn();

	const fakeExpress = {
		Router: mockRouter
	};

	const fakeRouter = {
		get: mockGet
	};

	beforeEach(() => {
		express.mockImplementation(() => {
			return fakeExpress;
		});

		express.Router.mockImplementation(() => {
			return fakeRouter;
		});
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('should create an Express router', () => {
		initialiseRoutes();

		expect(express.Router).toHaveBeenCalled();
	});

	it('should create an Express router which calls get', () => {
		initialiseRoutes();

		expect(fakeRouter.get).toHaveBeenCalled();
	});

	it('should return router', () => {
		const router = initialiseRoutes();

		expect(router).toEqual(fakeRouter);
	});
});
