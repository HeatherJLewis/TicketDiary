import express from 'express';
import renderIndexPage from './middleware/renderIndexPage.js';

const initialiseRoutes = () => {
	const router = express.Router();

	router.get('/', renderIndexPage);
	router.get('/homePage', (request, response) => response.send('HomePage'));
	router.get('/heather', (request, response) => response.send('Heather'));

	return router;
};

export { initialiseRoutes };
