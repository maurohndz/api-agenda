import { usersAttributes } from '@Sequelize/models/users';
import { sequelize } from '@Sequelize/connection';
import { initModels } from '@Sequelize/models/init-models';
import { RegisterUserAttrInterface } from '@Interfaces/User/register.interface';
import BaseRepository from './BaseRepository';

class UserRepository extends BaseRepository<usersAttributes, RegisterUserAttrInterface> {
  constructor() {
    super(initModels(sequelize)['users']);
  }
}

export default UserRepository;