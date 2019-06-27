const Sequelize = require("sequelize");

class Product extends Sequelize.Model {
  static tableName() {
    return "products";
  }
  static attributes() {
    return {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
    };
  }
}

module.exports = (sequelize) => {
	Product.init(Product.attributes(), { sequelize, modelName: Product.tableName(), timestamps: false });
	return Product;
}
module.exports.Product = Product;