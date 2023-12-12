import BaseRepository from './BaseRepository';
import { users, usersAttributes } from '@Sequelize/models/users';
import { models } from '@Sequelize/connection';

class UserRepository extends BaseRepository<users> {
  constructor() {
    super(models.users);
  }

  async getDetails(): Promise<usersAttributes[]> {
    return await this.findAll();
  }

  // Agrega aquí otros métodos específicos de User...
}

export default UserRepository;