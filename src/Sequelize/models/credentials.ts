import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { users, usersId } from './users';

export interface credentialsAttributes {
  id: string;
  user_id: string;
  password?: string;
  temporary_password?: string;
}

export type credentialsPk = "id";
export type credentialsId = credentials[credentialsPk];
export type credentialsOptionalAttributes = "id" | "password" | "temporary_password";
export type credentialsCreationAttributes = Optional<credentialsAttributes, credentialsOptionalAttributes>;

export class credentials extends Model<credentialsAttributes, credentialsCreationAttributes> implements credentialsAttributes {
  id!: string;
  user_id!: string;
  password?: string;
  temporary_password?: string;

  // credentials belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof credentials {
    return credentials.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('uuid_generate_v1'),
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    password: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    temporary_password: {
      type: DataTypes.STRING(256),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'credentials',
    schema: 'security',
    timestamps: false,
    indexes: [
      {
        name: "pk_credential",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
