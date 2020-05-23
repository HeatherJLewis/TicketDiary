import express from 'express';
import { initialiseRoutes } from './routes';

const createServer = () => {
	const app = express();
	app.use(initialiseRoutes());

	return app;
};

const startServer = (app, port) => {
	app.listen(port, () =>
		console.log(`App listening at http://localhost:${port}`)
	);
};

export { createServer, startServer };
