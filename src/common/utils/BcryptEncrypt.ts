import { Service } from 'typedi';
import bcrypt from 'bcrypt';
import config from '@Config/environment';

@Service()
class BcryptEncrypt {
  constructor() {}

  /**
   * Method for obtaining information from a user
   * @param {string} text - Text.
   */
  async hash(text: string): Promise<string> {
    return bcrypt.hashSync(text, config.ENCRYPT.SALT);
  }

  /**
   * Method for obtaining information from a user
   * @param {string} text - Text.
   * @param {string} hText - Coded text.
   */
  async compare(text: string, hText: string): Promise<boolean> {
    return bcrypt.compareSync(text, hText);
  }
}

export default BcryptEncrypt;