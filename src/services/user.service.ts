
import { Service } from 'typedi';

@Service()
class UserService {
  /**
   * Method for obtaining information from a user
   * @param {string} userId - User ID.
   * @returns {Promise<any>} - User information.
   */
  async getDetails(userId: string): Promise<any> {
    return {}
  }

  async createUser(userData): Promise<any> {
    return {
      "id": "1f38dfd0-864d-45a8-9dd4-9b94af9d6afe",
      "first_name": "Derwin",
      "last_name": "Sinson",
      "email": "dsinson0@oracle.com",
      "gender": "Male"
    };
  }
}

export default UserService;
