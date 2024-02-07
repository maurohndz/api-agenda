import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { users, usersId } from './users';

export interface credentialsAttributes {
  user_id: string;
  password: string;
  temporary_password?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type credentialsPk = "user_id";
export type credentialsId = credentials[credentialsPk];
export type credentialsOptionalAttributes = "temporary_password" | "created_at" | "updated_at" | "deleted_at";
export type credentialsCreationAttributes = Optional<credentialsAttributes, credentialsOptionalAttributes>;

export class credentials extends Model<credentialsAttributes, credentialsCreationAttributes> implements credentialsAttributes {
  user_id!: string;
  password!: string;
  temporary_password?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;

  // credentials belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof credentials {
    return credentials.init({
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    temporary_password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'credentials',
    schema: 'security',
    timestamps: false,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    indexes: [
      {
        name: "credentials_pKey",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
