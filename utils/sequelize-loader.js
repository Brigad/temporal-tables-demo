const Sequelize = require("sequelize");
const config = require("../config");
const models = require("../models");

const sequelize = new Sequelize(config);

// Singleton needed to only load models once
let initModels = null;

module.exports = (req, _, next) => {
  if (!initModels) {
    // Initialize sequelize models
    initModels = Object.keys(models).reduce(
      (result, modelKey) => ({
        ...result,
        [modelKey]: models[modelKey](sequelize)
      }),
      {}
    );
  }
  // Bind database data to req object
  req.database = {
    models: initModels,
    connection: sequelize
  };

  next();
};
