import { Sequelize } from 'sequelize';
import config from '@Config/environment';

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
