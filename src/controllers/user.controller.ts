import { Request } from 'express';
import { Service, Inject } from 'typedi';
import UserService from '@Services/user.service';

@Service()
class UserController {
  constructor(@Inject() private userService: UserService) {}

  async registerUser(req: Request) {
    return await this.userService.createUser(req.body);
  }
}

export default UserController;
