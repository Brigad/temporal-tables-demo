module.exports = async (req, res) => {
  try {
    const { Product } = req.database.models;

    if (!req.body || !req.body.name) {
      return res.status(400).json({ error: "Missing param name on body" });
    }
    const product = await Product.findAll();

    const productsResult = product.map(elem => {
      const { sys_period, ...result } = elem.get({ plain: true });
      return result;
    });
    return res.json(productsResult);
  } catch (error) {
    return res.status(500).json(error);
  }
};
