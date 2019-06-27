'use strict';
const addVersions = require('../utils/add-versions');
const { up, down } = require('../utils/temporal-table-migration');
const { Product: ProductsModel } = require('../models/product');

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.sequelize.query(addVersions).then(
     () => up(queryInterface, ProductsModel.tableName())
   )
  },

  down: (queryInterface, Sequelize) => {
    return down(queryInterface, ProductsModel.tableName());
  }
};
