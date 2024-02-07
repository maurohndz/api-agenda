import { usersAttributes } from '@Sequelize/models/users';

export interface RegisterUserAttrInterface
  extends Omit<
    usersAttributes,
    'id' | 'status' | 'created_at' | 'updated_at' | 'deleted_at'
  > {}

export interface RegisterUserPayloadInterface
  extends RegisterUserAttrInterface {
  password: string;
}
