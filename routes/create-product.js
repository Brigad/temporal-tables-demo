module.exports = async (req, res) => {
  try {
    const { Product } = req.database.models;

    if (!req.body || !req.body.name) {
      return res.status(400).json({ error: "Missing param name on body" });
    }
    const product = await Product.create({
      name: req.body.name
    });

    const { sys_period, ...result } = product.get({ plain: true });
    return res.json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};
