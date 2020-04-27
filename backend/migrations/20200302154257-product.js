'use strict';

module.exports = {
  up: async (queryInterface,Sequelize) => {
    await queryInterface.createTable('dbo_products',{
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      product_name: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      category_id: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      user_id: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      status:{
        type: Sequelize.INTEGER(3),
        allowNull:false,
        defaultValue:1
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    })
  },

  down: async (queryInterface,Sequelize) => {
    await queryInterface.dropTable('dbo_products');
  }
};
