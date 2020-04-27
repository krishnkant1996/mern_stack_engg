'use strict';
let uuid = require('uuid').v4;
module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('dbo_categories', [{
      id: uuid(),
      category_name: 'Computers',
    },{
      id: uuid(),
      category_name: 'Traditional',
    },{
      id: uuid(),
      category_name: 'Jewellery',
    },
    {
      id: uuid(),
      category_name: 'Personal Care',
    }], {})
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('dbo_categories', null, {});
  }
};
