import { credentialsAttributes } from '@Sequelize/models/credentials';

export interface CreateCredentialInterface
  extends Omit<
  credentialsAttributes,
  'created_at' | 'updated_at' | 'deleted_at'
  > {}
