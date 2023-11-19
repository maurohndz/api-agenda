const { resolve } = require('path');
const dotenv = require('dotenv');
const SequelizeAuto = require('sequelize-auto');

// Load environment variables
dotenv.config({
  path: resolve(`./environment/.env.${process.env.ENVIRONMENT}`).trim()
});

const Auto = new SequelizeAuto(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASS,
  {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'postgres',
    directory: './src/Sequelize/models',
    lang: 'ts',
    tables: [
      'main.users',
      'security.credentials'
    ]
  }
);

Auto.run().then((res) => {
  console.log('Sequelize - Synchronized models')
})
