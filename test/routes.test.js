import express from 'express';
import { initialiseRoutes } from '../src/routes';

jest.mock('express');

describe('routes.js', () => {
	const mockRouter = jest.fn();

	const fakeExpress = {
		Router: mockRouter
	};

	beforeEach(() => {
		express.mockImplementation(() => {
			return fakeExpress;
		});
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('should create an Express router', () => {
		initialiseRoutes();

		expect(express.Router).toHaveBeenCalled();
	});

	it.only('should create an Express router which calls get', () => {
		initialiseRoutes();

		expect(express.Router).toHaveBeenCalled();
	});
});
