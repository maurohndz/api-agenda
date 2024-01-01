import { Container } from 'typedi';
import { Router } from 'express';
import { USER_REGISTER, USER_DETAILS } from '@Urls/user.url';
import { commonController } from '@Utils/commonController';
import UserController from '@Controllers/user.controller';

const router = Router();
const userController = Container.get(UserController);

router.get(USER_DETAILS, userController.findUser);
router.post(USER_REGISTER, commonController(userController.registerUser.bind(userController)));

export default router;
