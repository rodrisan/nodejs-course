const { config } = require('../config/config');

const DB_DIALECT  = config.dbDialect;
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `${DB_DIALECT}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development: {
    url: URI,
    dialect: DB_DIALECT,
  },
  production: {
    url: URI,
    dialect: DB_DIALECT,
  }
}
