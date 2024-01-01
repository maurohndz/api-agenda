
import { Service } from 'typedi';
import { usersAttributes } from '@Sequelize/models/users';
import UserRepository from "@Repos/User.repository";

@Service()
class UserService extends UserRepository {
  /**
   * Method for obtaining information from a user
   * @param {string} userId - User ID.
   * @returns {Promise<usersAttributes>} - User information.
   */
  async details(userId: string): Promise<usersAttributes> {
    return await this.findById(userId);
  }

  async register(userData: usersAttributes): Promise<usersAttributes> {
    return await this.create(userData);
  }
}

export default UserService;
