import express from 'express';

const app = express();

const createServer = () => {
  app.get('/', (request, response) => response.send('Gooday'));
  return app;
};

const startServer = port => {
  app.listen(port);
  console.log(`Running on port: ${port}`);
};

export { createServer, startServer };
