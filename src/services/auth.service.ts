import { Inject, Service } from 'typedi';
import CredentialService from '@Services/credential.service';
import UserService from '@Services/user.service';
import CommonError from '@Tools/BuildError';

@Service()
class AuthService {
  constructor(
    @Inject() private credentialService: CredentialService,
    @Inject() private userService: UserService
  ) {}

  /**
   * Login method
   */
  async login(credentials) {
    const user = await this.userService.details({ email: credentials.email });
    if (!user) new CommonError({
      message: 'Error en el UserService - details',
      code: 400
    });

    return {};
  }
}

export default AuthService;
