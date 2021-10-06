const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const messageSchema = new Schema({
    from: { type: mongoose.ObjectId, required: true},
    body: { type: String, required: true },
    sent_at: { type: Date, required: true, default: Date.now  }
}, { _id : false });

// Create Model
const Message = mongoose.model('message', messageSchema);

// Export Model
module.exports = Message;