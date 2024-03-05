const mongoose = require('mongoose');

const { Schema } = mongoose;

const chatSchema = new Schema({
    chatGroup: {
        type: [Schema.Types.ObjectId],
        ref: 'User'
    },
    chatMessages: {
        type: [String]
    },
    timestamp: {
        type: Date
    }
})

module.exports = Chat;