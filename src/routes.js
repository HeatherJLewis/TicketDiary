import express from 'express';

const router = express.Router();

const initialiseRoutes = () => {
	router.get('/', (request, response) => response.send('Gooday'));
	router.get('/homePage', (request, response) => response.send('HomePage'));
	router.get('/heather', (request, response) => response.send('Heather'));

	return router;
};

export { initialiseRoutes };
