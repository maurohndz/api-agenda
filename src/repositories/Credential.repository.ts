import { sequelize } from '@Sequelize/connection';
import { initModels } from '@Sequelize/models/init-models';
import { credentialsAttributes } from '@Sequelize/models/credentials';
import { CreateCredentialInterface } from '@Interfaces/Credential/create.interface';
import BaseRepository from './BaseRepository';

class CredentialRepository extends BaseRepository<credentialsAttributes, CreateCredentialInterface> {
  constructor() {
    super(initModels(sequelize)['credentials']);
  }
}

export default CredentialRepository;