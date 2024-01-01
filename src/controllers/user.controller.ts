import { NextFunction, Request, Response } from 'express';
import { Service, Inject } from 'typedi';
import UserService from '@Services/user.service';

@Service()
class UserController {
  constructor(@Inject() private userService: UserService) {}

  async findUser(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  
    return this.userService.details(req.params.id);
  }

  async registerUser(req: Request) {
    return await this.userService.register(req.body);
  }
}

export default UserController;
