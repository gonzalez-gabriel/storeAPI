const { Router } = require('express');
const productsController = require('../controllers/productsController');
const routes = (Product) => {
  const productRouter = Router();
  const { getProducts, postProduct, putProductById, deleteProductById } =
    productsController(Product);
  productRouter.route('/catalog').get(getProducts).post(postProduct);
  productRouter
    .route('/catalog/:id')
    .put(putProductById)
    .delete(deleteProductById);
  return productRouter;
};
module.exports = routes;
