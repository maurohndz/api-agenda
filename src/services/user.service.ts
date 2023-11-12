import { PrismaClient, type users } from '@prisma/client';
import { type UUID } from 'crypto';

class UserService {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  /**
   * Method for obtaining information from a user
   * @param {UUID} userId - User ID.
   * @returns {Promise<users>} - User information.
   */
  async getDetails(userId: UUID): Promise<users> {
    return await this.prisma.users.findFirstOrThrow();
  }
}

export default UserService;
