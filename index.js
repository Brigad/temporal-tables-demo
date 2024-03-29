const express = require("express");
const sequelizeLoader = require("./utils/sequelize-loader");

// Route handlers
const createProductHandler = require("./routes/create-product");
const deleteProductHandler = require("./routes/delete-product");
const editProductHandler = require("./routes/edit-product");
const getProductHandler = require("./routes/get-product");
const listProductsHandler = require("./routes/list-products");

// express init
const app = express();

const port = 3000;

app.use(sequelizeLoader);
app.use(express.json());

// Routes definition
app.get("/", (req, res) => {
  console.log(req.database);
  res.send("Hello World!");
});
app.post('/v1/products', createProductHandler);
app.delete('/v1/products/:id', deleteProductHandler);
app.patch('/v1/products/:id', editProductHandler);
app.get('/v1/products/:id', getProductHandler);
app.get('/v1/products', listProductsHandler);

// Server start
app.listen(port, () => console.log(`App listening on port ${port}!`));
