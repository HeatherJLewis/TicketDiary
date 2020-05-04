import express from 'express';

const app = express();
const port = 3000;

const createServer = () => {
  app.get('/', (request, response) => response.send('Gooday'));
  return app;
};

const startServer = () => {
  app.listen(port, () => {
    console.log(`Running on port: ${port}`);
  });
};

export { createServer, startServer };
