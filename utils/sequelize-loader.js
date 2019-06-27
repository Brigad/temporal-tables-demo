const Sequelize = require("sequelize");
const config = require("../config");
const models = require("../models");

const sequelize = new Sequelize(config);

let initModels = null;

module.exports = (req, _, next) => {
  if (!initModels) {
    initModels = Object.keys(models).reduce(
      (result, modelKey) => ({
        ...result,
        [modelKey]: models[modelKey](sequelize)
      }),
      {}
    );
  }
  req.database = {
    models: initModels,
    connection: sequelize
  };

  next();
};
