const { config } = require('./../config/config');

module.exports = {
  development: {
    url: config.dbUrl,
    dialect: config.dbDialect,
  },
  production: {
    url: config.dbUrl,
    dialect: config.dbDialect,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
}
