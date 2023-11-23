import { type UUID } from 'crypto';
import { Service } from 'typedi';

@Service()
class UserService {
  /**
   * Method for obtaining information from a user
   * @param {UUID} userId - User ID.
   * @returns {Promise<any>} - User information.
   */
  async getDetails(userId: UUID): Promise<any> {
    console.log("getDetails - ", userId);
    return "users";
  }
}

export default UserService;
