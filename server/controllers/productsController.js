const productsController = (Product) => {
  const getProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).send(products);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  const postProduct = async (req, res) => {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).send(product);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  const putProductById = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).send(product);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  const deleteProductById = async (req, res) => {
    try {
      const { id } = req.params;
      await Product.findByIdAndDelete(id);
      res.status(200).send('Product deleted');
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  return { postProduct, getProducts, putProductById, deleteProductById };
};
module.exports = productsController;
