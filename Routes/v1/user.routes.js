const express = require('express')
const userControllers = require('./../../Controllers/user.controller');

const routes = express.Router();

routes.route('/').get(userControllers.getAllUsers);

module.exports=routes;