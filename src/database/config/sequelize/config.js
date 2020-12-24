/* eslint-disable indent */
/* eslint-disable linebreak-style */
import dotenv from 'dotenv';
const { log } = console;

dotenv.config();
module.exports = {
  development: {
    logging: false,
    dialect: process.env.DB_DIALECT || 'sqlite',
    ...(process.env.DATABASE_URL
      ? {
          use_env_variable: 'DATABASE_URL',
        }
      : {
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          host: process.env.DB_HOST,
          logging: log,
          // port: process.env.DB_PORT,
          // dialectOptions: {
          //   options: {
          //     encrypt: true,
          //     validateBulkLoadParameters: true,
          //   },
          // },

          // dialect: 'mssql',
          // dialectModulePath: 'sequelize-msnodesqlv8',
          // dialectOptions: {
          //   instanceName: 'MSSQLSERVER',
          //   trustedConnection: true,
          // },
          // host: 'localhost',
          // database: 'gefu',
        }),
  },
  test: {
    logging: false,
    dialect: process.env.TEST_DB_DIALECT || 'sqlite',
    ...(process.env.TEST_DATABASE_URL
      ? {
          use_env_variable: 'TEST_DATABASE_URL',
        }
      : {
          username: process.env.TEST_DB_USER,
          password: process.env.TEST_DB_PASSWORD,
          database: process.env.TEST_DB_NAME,
          host: process.env.TEST_DB_HOST,
        }),
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'sqlite',
    operatorsAliases: false,
  },
};

// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   }
// }
