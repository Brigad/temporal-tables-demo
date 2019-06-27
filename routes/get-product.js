module.exports = async (req, res) => {
  try {
    const { Product } = req.database.models;

    const product = await Product.findOne({
      where: {
        id: req.params.id
      }
    });
    const { sys_period, ...result } = product.get({ plain: true });

    return res.json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};