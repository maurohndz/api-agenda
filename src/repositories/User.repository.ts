//import BaseRepository from './BaseRepository';
import MockingBaseRepository from './MockingBaseRepository';
import { usersAttributes } from '@Sequelize/models/users';
import { sequelize } from '@Sequelize/connection';
import { initModels } from '@Sequelize/models/init-models';

class UserRepository extends MockingBaseRepository<usersAttributes> {
  constructor() {
    super(initModels(sequelize)['users']);
  }

  async getDetails(): Promise<usersAttributes[]> {
    return await this.findAll();
  }

  // Agrega aquí otros métodos específicos de User...
}

export default UserRepository;