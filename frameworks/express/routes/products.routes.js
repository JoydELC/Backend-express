// express/routes/products.routes.js
const express = require('express');
const router = express.Router();
const ProductController = require('../../../interfaces/controllers/ProductController');
const ProductPresenter = require('../../../interfaces/presenters/ProductPresenter');
const ProductRepository = require('../../../interfaces/gateways/ProductRepository');
const ListProducts = require('../../../use-cases/product/ListProducts');
const GetProduct = require('../../../use-cases/product/GetProduct');
const CreateProduct = require('../../../use-cases/product/CreateProduct');
const UpdateProduct = require('../../../use-cases/product/UpdateProduct');
const DeleteProduct = require('../../../use-cases/product/DeleteProduct');

const listProducts = new ListProducts(new ProductRepository());
const getProduct = new GetProduct(new ProductRepository());
const createProduct = new CreateProduct(new ProductRepository());
const updateProduct = new UpdateProduct(new ProductRepository());
const deleteProduct = new DeleteProduct(new ProductRepository());

const productController = new ProductController(
  listProducts, getProduct, createProduct, updateProduct, deleteProduct,
  new ProductPresenter()
);

router.get('/', (req, res) => productController.handleListProducts(req, res));
router.get('/:id', (req, res) => productController.handleGetProduct(req, res));
router.post('/', (req, res) => productController.handleCreateProduct(req, res));
router.patch('/:id', (req, res) => productController.handleUpdateProduct(req, res));
router.delete('/:id', (req, res) => productController.handleDeleteProduct(req, res));

module.exports = router;
