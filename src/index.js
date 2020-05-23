import { createServer, startServer } from './server';

const port = 3000;

const app = createServer();

startServer(app, port);
