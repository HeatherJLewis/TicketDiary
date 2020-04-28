import express from 'express';

const router = express.Router();

router.get('/', (request, response) => response.send('Gooday'));
router.get('/homePage', (request, response) => response.send('HomePage'));

export { router };
