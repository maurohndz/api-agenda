import { Request } from 'express';
import { Service } from 'typedi';

@Service()
class UserController {
  constructor() {}

  async registerUser(req: Request) {
    return "Hola";
  }
}

export default UserController;
