const router = require('express').Router();

const UsersController = require('../../controllers/users');

/**
 * @route   GET /api/users/where/id/:id
 * @desc    Get user by its id
 * @access  PUBLIC
 */
router.route('/where/id/:id')
    .get(UsersController.findById);
    
/**
 * @route   GET /api/users/where/username/:username
 * @desc    Get user by its username
 * @access  PUBLIC
 */
router.route('/where/username/:username')
    .get(UsersController.findByUsername);

/**
 * @route   POST /api/users/register
 * @desc    Register a user
 * @access  PUBLIC
 */
router.route('/register')
    .post(UsersController.register);

module.exports = router;