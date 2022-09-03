const express = require('express')
const userControllers = require('./../../Controllers/user.controller');

const routes = express.Router();

routes
  .route('/')
  /**
   * @api {get} (/) if use query like: /?limit=number&page=number you can see limited data with limited page 
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
     /**
   * @api {put} (/:id) update a user with id
   * @apiDescription update a user field or whole information
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   not avilable
   *
   * @apiSuccess {Object[]} id sprecific users object
   *
   * @apiError  (not found 404) 
   * @apiError (Forbidden 403)    not available cs kon't use jwt
   */
  

    .put(userControllers.updateAUser)

      /**
   * @api {delete} (/:id) delete a user with id
   * @apiDescription delete a user from users data using id
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   not avilable
   *
   * @apiSuccess {Object[]} without deleted id object
   *
   * @apiError  (not found 404) 
   * @apiError (Forbidden 403)    not available cs kon't use jwt
   */
  

    .delete(userControllers.deleteAUser)

module.exports=routes;