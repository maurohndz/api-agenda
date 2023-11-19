import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface usersAttributes {
  id: string;
  code: string;
  names: string;
  last_name: string;
  username: string;
  email: string;
  phone?: string;
  address?: string;
  avatar?: string;
  status: boolean;
}

export type usersPk = "id";
export type usersId = users[usersPk];
export type usersOptionalAttributes = "id" | "phone" | "address" | "avatar" | "status";
export type usersCreationAttributes = Optional<usersAttributes, usersOptionalAttributes>;

export class users extends Model<usersAttributes, usersCreationAttributes> implements usersAttributes {
  id!: string;
  code!: string;
  names!: string;
  last_name!: string;
  username!: string;
  email!: string;
  phone?: string;
  address?: string;
  avatar?: string;
  status!: boolean;


  static initModel(sequelize: Sequelize.Sequelize): typeof users {
    return users.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('uuid_generate_v1'),
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    names: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(256),
      allowNull: false,
      unique: "uq_user_email"
    },
    phone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    avatar: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'main',
    timestamps: false,
    indexes: [
      {
        name: "pk_user",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "uq_user_email",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
  }
}
