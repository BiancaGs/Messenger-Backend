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

/**
 * @route   POST /api/conversations
 * @desc    Creates a new conversation
 * @access  PUBLIC
 */
router.route('/')
    .post(ConversationController.newConversation);

module.exports = router;