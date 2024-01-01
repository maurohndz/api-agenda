import BaseRepository from './BaseRepository';
import { users, usersAttributes } from '@Sequelize/models/users';
import { sequelize } from '@Sequelize/connects';
import { initModels } from '@Sequelize/models/init-models';

class UserRepository extends BaseRepository<usersAttributes> {
  constructor() {
    super(initModels(sequelize)['users']);
  }
}

export default UserRepository;
