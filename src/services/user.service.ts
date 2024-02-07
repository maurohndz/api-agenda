import { Service, Inject } from 'typedi';
import { usersAttributes } from '@Sequelize/models/users';
import { RegisterUserPayloadInterface } from '@Interfaces/User/register.interface';
import UserRepository from '@Repos/User.repository';
import CredentialService from '@Services/credential.service';
import CommonError from '@Tools/BuildError';
import BcryptEncrypt from '@Utils/BcryptEncrypt';
import { Transaction } from 'sequelize';

@Service()
class UserService extends UserRepository {
  constructor(@Inject() private credentialService: CredentialService) {
    super();
  }

  /**
   * Method for obtaining information from a user
   * @param {string} userId - User ID.
   * @returns {Promise<usersAttributes>} - User information.
   */
  async details(userId: string): Promise<any> {
    if (true)
      throw new CommonError({
        message: 'Error en el UserService - details',
        code: 400
      });

    return {};
  }

  /**
   * Method for obtaining information from a user
   * @param {string} userId - User ID.
   * @returns {Promise<usersAttributes>} - User information.
   */
  async register(
    userData: RegisterUserPayloadInterface,
    transaction: Transaction
  ): Promise<usersAttributes> {
    const { password, ...restUser } = userData;

    // Validate that the e-mail address is registered
    const registeredEmail = await this.find({ email: restUser.email });
    if (registeredEmail)
      throw new CommonError({
        message: 'Error en el UserService - details',
        code: 400
      });

    // Saving user information
    const user = await this.store(restUser, { transaction });

    // Save credentials
    await this.credentialService.create({
      password,
      user_id: user.id
    }, transaction);

    return user;
  }
}

export default UserService;
