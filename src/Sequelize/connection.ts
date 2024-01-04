import config from '@Config/environment';
import { Sequelize } from 'sequelize';
import { initModels } from './models/init-models';

export const sequelize = new Sequelize(
  config.DB.NAME,
  config.DB.USER,
  config.DB.PASS,
  {
    dialect: 'postgres',
    host: config.DB.HOST,
    port: config.DB.PORT
  }
);

export const models = initModels(sequelize);
