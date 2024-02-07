import type { Sequelize } from "sequelize";
import { credentials as _credentials } from "./credentials";
import type { credentialsAttributes, credentialsCreationAttributes } from "./credentials";
import { users as _users } from "./users";
import type { usersAttributes, usersCreationAttributes } from "./users";

export {
  _credentials as credentials,
  _users as users,
};

export type {
  credentialsAttributes,
  credentialsCreationAttributes,
  usersAttributes,
  usersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const credentials = _credentials.initModel(sequelize);
  const users = _users.initModel(sequelize);

  credentials.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasOne(credentials, { as: "credential", foreignKey: "user_id"});

  return {
    credentials: credentials,
    users: users,
  };
}
