'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: Sequelize.STRING,
      created_at: Sequelize.Date,
      updated_at: Sequelize.Date
    })
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable('users')
  }
};
