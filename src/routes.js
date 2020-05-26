import express from 'express';
import renderIndexPage from './middleware/renderIndexPage';
import renderDatabaseResults from './middleware/renderDatabaseResults';

const initialiseRoutes = () => {
	const router = express.Router();

	router.get('/', renderIndexPage);
	router.get('/database', renderDatabaseResults);
	router.get('/heather', (request, response) => response.send('Heather'));

	return router;
};

export { initialiseRoutes };
