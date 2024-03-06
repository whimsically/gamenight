const mongoose = require('mongoose');

const { Schema } = mongoose;

const messageSchema = new Schema({
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    sentAt: {
        type: Date,
        default: Date.now(),
    }
}
);

module.exports = messageSchema;