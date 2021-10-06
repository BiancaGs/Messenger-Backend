const router = require('express').Router();

const ConversationController = require('../../controllers/conversations');

/**
 * @route   GET /api/conversations/:id
 * @desc    Get the full conversation
 * @access  PUBLIC
 */
router.route('/:id')
    .get(ConversationController.findById);

/**
 * @route   POST /api/conversations/:id/new-message
 * @desc    Creates a new message on a conversation
 * @access  PUBLIC
 */
router.route('/:id/new-message')
    .post(ConversationController.newMessage);

module.exports = router;