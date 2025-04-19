import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (_, res) => {
  res.send('Hello, World!');
});

router.post('/new-data', (req, res) => {
  res.status(StatusCodes.BAD_REQUEST).json(req.body);
});

export { router };
