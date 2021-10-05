const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
    name: { type: String, required: true},
    username: { type: Array, required: true },
    joined_at: { type: Date, default: Date.now }
});

// Create Model
const User = mongoose.model('user', userSchema);

// Export Model
module.exports = User;