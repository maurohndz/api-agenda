import { Request } from 'express';
import { Service, Inject } from 'typedi';
import { commonController } from '@Utils/commonController';
import UserService from '@Services/user.service';

@Service()
class UserController {
  constructor(@Inject() private userService: UserService) {}

  /**
   * Method for obtaining information from a user
   */
  findUser = commonController(async (req: Request) => {
    return this.userService.details(req.params.id);
  });

  /**
   * Method to register a user
   */
  registerUser = commonController(async (req: Request) => {
    return await this.userService.register(req.body);
  })
}

export default UserController;
