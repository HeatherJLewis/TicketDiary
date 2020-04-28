import express from 'express';
import { router } from './routes';

let app = express();
let port = 3000;

app.use(router);

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
