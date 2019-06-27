module.exports = async (req, res) => {
  try {
    const { Product } = req.database.models;

    await Product.destroy({
      where: {
        id: req.params.id
      }
    });

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json(error);
  }
};