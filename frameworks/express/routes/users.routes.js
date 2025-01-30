// express/routes/users.routes.js
const express = require('express');
const router = express.Router();
const UserController = require('../../../interfaces/controllers/UserController');
const UserPresenter = require('../../../interfaces/presenters/UserPresenter');
const UserRepository = require('../../../interfaces/gateways/UserRepository');
const ListUsers = require('../../../use-cases/user/ListUsers');
const GetUser = require('../../../use-cases/user/GetUser');

const listUsers = new ListUsers(new UserRepository());
const getUser = new GetUser(new UserRepository());

const userController = new UserController(listUsers, getUser, new UserPresenter());

router.get('/', (req, res) => userController.handleListUsers(req, res));
router.get('/:id', (req, res) => userController.handleGetUser(req, res));

module.exports = router;
