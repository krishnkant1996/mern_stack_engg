'use strict';

module.exports = {
  up: async (queryInterface,Sequelize) => {
    await queryInterface.createTable('dbo_categories',{
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      category_name: {
        type: Sequelize.STRING(30),
        allowNull: false
      }
    })
  },

  down: async (queryInterface,Sequelize) => {
    await queryInterface.dropTable('dbo_categories');
  }
};
