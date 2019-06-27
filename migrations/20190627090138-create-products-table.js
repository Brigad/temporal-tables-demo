'use strict';
const { Product: ProductsModel } = require('../models/product');

module.exports = {
  up: (queryInterface, Sequelize) => {
    console.log(ProductsModel)
   return queryInterface.createTable(ProductsModel.tableName(), ProductsModel.attributes());
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(ProductsModel.tableName())
  }
};
