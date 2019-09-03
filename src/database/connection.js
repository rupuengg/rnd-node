const Sequelize = require('sequelize');
const configDb = require('../config/database');

var sequelize = new Sequelize(configDb.database, configDb.user, configDb.password, {
  host: configDb.server,
  dialect: configDb.dialect,

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

module.exports = sequelize;
global.sequelize = sequelize;