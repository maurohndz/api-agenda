
import { Service } from 'typedi';
import { usersAttributes } from '@Sequelize/models/users';
import UserRepository from "@Repos/User.repository";
import CommonError from '@Errors/CommonError';

@Service()
class UserService extends UserRepository {
  /**
   * Method for obtaining information from a user
   * @param {string} userId - User ID.
   * @returns {Promise<usersAttributes>} - User information.
   */
  async details(userId: string): Promise<any> {
    if (true) throw new CommonError({ message: 'Hola', statusCode: 400 });

    return await this.findById(userId);
  }

  async register(userData: usersAttributes): Promise<usersAttributes> {
    return await this.create(userData);
  }
}

export default UserService;
