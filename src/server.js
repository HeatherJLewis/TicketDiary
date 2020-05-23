import express from 'express';
import { initialiseRoutes } from './routes';

const createServer = () => {
	const app = express();
	app.use(initialiseRoutes());

	return app;
};

const startServer = (app, port) => {
	app.listen(port);
	console.log(`Running on port: ${port}`); // this isn't right, it should be a callback passed into app.listen - check app.listen
};

export { createServer, startServer };
