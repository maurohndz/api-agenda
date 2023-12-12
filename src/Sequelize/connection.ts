import config from '@Config/environment';
import { Sequelize } from 'sequelize';
import { initModels } from './models/init-models';

export const database = new Sequelize(
  config.DB.DATABASE_NAME,
  config.DB.DATABASE_USER,
  config.DB.DATABASE_PASS,
  {
    host: config.DB.DATABASE_HOST,
    port: config.DB.DATABASE_PORT,
    dialect: 'postgres',
  }
);

export const models = initModels(database);
