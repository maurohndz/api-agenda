import { Request } from 'express';
import { Service, Inject } from 'typedi';
import { commonController } from '@Utils/commonController';
import { SUCCESS } from '@HttpMessages/succes';
import { sequelize } from '@Sequelize/connection';
import UserService from '@Services/user.service';
import BuildResponse from '@Tools/BuildResponse';

@Service()
class UserController {
  constructor(@Inject() private userService: UserService) {}

  /**
   * Method for obtaining information from a user
   */
  findUser = commonController(async (req: Request) => {
    const user = await this.userService.details(req.params.id);
    return new BuildResponse(SUCCESS, { data: user });
  });

  /**
   * Method to register a user
   */
  registerUser = commonController(async (req: Request) => {
    const t = await sequelize.transaction();

    return await this.userService.register(req.body, t)
      .then(async (user) => {
        await t.commit();

        return new BuildResponse(SUCCESS, { data: user });
      })
      .catch(async (error) => {
        await t.rollback();

        throw error;
      });
  });
}

export default UserController;
