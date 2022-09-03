const express = require('express')
const userControllers = require('./../../Controllers/user.controller');

const routes = express.Router();

routes
  .route('/')
  /**
   * @api {get} /all
   * @apiDescription Get all users
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization not available right now
   *
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the users.
   *
   * @apiError 404 (data not found)
   */
  .get(userControllers.getAllUsers)
   /**
   * @api {post} / post a users
   * @apiDescription post a user data
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   not avilable
   *
   *
   * @apiSuccess {Object[]} all the users.
   *
   * @apiError  
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  
  .post(userControllers.saveAUsers);

  routes
    .route('/:id')
    
    .put(userControllers.updateAUser)

module.exports=routes;