const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Import de outros esquemas
const Message = require('./Message');

// Create Schema
const conversationSchema = new Schema({
    title: { type: String, },
    messages: { type: [Message.schema], required: true },
    members: { type: Array, required: true },
    created_at: { type: Date, default: Date.now }
});

// Create Model
const Conversation = mongoose.model('conversation', conversationSchema);

// Export Model
module.exports = Conversation;