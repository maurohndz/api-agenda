import { Request } from 'express';
import { Service, Inject } from 'typedi';
import { commonController } from '@Utils/commonController';
import { SUCCESS } from '@HttpMessages/succes';
import { sequelize } from '@Sequelize/connection';
import BuildResponse from '@Tools/BuildResponse';

@Service()
class AuthController {
  constructor() {}

  login = commonController(async (req: Request) => {
    return new BuildResponse(SUCCESS, { data: {} });
  });
}

export default AuthController;
