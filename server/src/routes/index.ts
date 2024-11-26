import { Router } from 'express';
import { getCities, getCityById } from '../controllers/cities';

const router = Router();

router.get('/cities', getCities);
router.get('/cities/:id', getCityById);

export const cityRoutes = router;