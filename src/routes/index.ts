import { Router } from 'express';
import { USER } from '@Urls/user.url';
import UserRoutes from './user.routes';

// Init main routes
const router = Router();

router.use(USER, UserRoutes);

export default router;
