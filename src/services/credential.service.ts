import { Inject, Service } from 'typedi';
import { Transaction } from 'sequelize';
import { CreateCredentialInterface } from '@Interfaces/Credential/create.interface';
import CredentialRepository from '@Repos/Credential.repository';
import BcryptEncrypt from '@Utils/BcryptEncrypt';

@Service()
class CredentialService extends CredentialRepository {
  constructor(@Inject() private bcrypt: BcryptEncrypt) {
    super();
  }

  /**
   * Save user credentials
   * @param {CreateCredentialInterface} credentials - User information.
   * @returns {Promise<usersAttributes>} - User information.
   */
  async create(
    credentials: CreateCredentialInterface,
    transaction: Transaction
  ) {
    const { password, ...rest } = credentials;

    // Encrypt password
    const encryptedPassword = await this.bcrypt.hash(password);

    return this.store({
      ...rest,
      password: encryptedPassword
    }, { transaction });
  }
}

export default CredentialService;
