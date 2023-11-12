import UserController from '@Controllers/user.controller';
import { Router } from 'express';

// Init main routes
const router = Router();

// Controllers
const userController = new UserController(router);

// Routes
userController.run();

export default router;
