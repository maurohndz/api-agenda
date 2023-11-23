import { Router } from 'express';
import { Service, Inject } from 'typedi';
import { USER, USER_DETAILS, USER_REGISTER, USER_UPDATE } from '@Urls/user.url';
import { commonController } from '@Utils/commonController';
import UserService from '@Services/user.service';

@Service()
class UserController {
  @Inject()
  private readonly userService: UserService;
  
  //
  private readonly controller: Router;

  constructor(private readonly router: Router) {
    this.controller = Router();
  }

  run(): void {
    /* [GET] obtain a user's information */
    this.controller.get(
      USER_DETAILS,
      commonController(async (req, res, next) => {
        console.log(this.userService)
        this.userService.getDetails("9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d");
        return 'true';
      })
    );

    /* [POST] User registration */
    this.controller.post(USER_REGISTER, (req, res) => {});

    /* [PATCH] User update */
    this.controller.patch(USER_UPDATE, () => {});

    this.router.use(USER, this.controller);
  }
}

export default UserController;
