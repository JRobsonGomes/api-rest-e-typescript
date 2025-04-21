import { Router } from 'express';
import { CidadesController } from '../controllers';

const router = Router();

router.get('/', (_, res) => {
  res.send('Hello, World!');
});

router.post('/cidades', CidadesController.createBodyValidation, CidadesController.create);

export { router };
