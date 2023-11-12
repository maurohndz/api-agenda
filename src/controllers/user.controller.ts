import { Router } from 'express';
import { USER, USER_DETAILS, USER_REGISTER, USER_UPDATE } from '@Urls/user.url';
import UserService from '@Services/user.service';

class UserController {
  private readonly controller: Router;
  private readonly service: UserService;

  constructor(private readonly router: Router) {
    this.controller = Router();
    this.service = new UserService();
  }

  run(): void {
    /* [GET] obtain a user's information */
    this.controller.get(USER_DETAILS, (req, res) => {
      this.service.getDetails('00000000-0000-0000-0000-000000000000');
      res.send('User');
    });

    /* [POST] User registration */
    this.controller.post(USER_REGISTER, (req, res) => {});

    /* [PATCH] User update */
    this.controller.patch(USER_UPDATE, () => {});

    this.router.use(USER, this.controller);
  }
}

export default UserController;
