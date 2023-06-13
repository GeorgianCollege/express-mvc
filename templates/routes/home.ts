import { Router } from 'express';
import { HomeController } from '../../templates/controllers/HomeController';

const router = Router();

router.get('/', HomeController.index);

export default router;
