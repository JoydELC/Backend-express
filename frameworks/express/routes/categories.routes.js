// express/routes/categories.routes.js
const express = require('express');
const router = express.Router();
const CategoryController = require('../../../interfaces/controllers/CategoryController');
const CategoryPresenter = require('../../../interfaces/presenters/CategoryPresenter');
const CategoryRepository = require('../../../interfaces/gateways/CategoryRepository');
const ListCategories = require('../../../use-cases/category/ListCategories');
const GetCategory = require('../../../use-cases/category/GetCategory');

const listCategories = new ListCategories(new CategoryRepository());
const getCategory = new GetCategory(new CategoryRepository());

const categoryController = new CategoryController(listCategories, getCategory, new CategoryPresenter());

router.get('/', (req, res) => categoryController.handleListCategories(req, res));
router.get('/:id', (req, res) => categoryController.handleGetCategory(req, res));

module.exports = router;
