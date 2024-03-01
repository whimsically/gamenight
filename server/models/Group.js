const mongoose = require('mongoose');

const { Schema } = mongoose;

const groupSchema = new Schema({
    groupCreator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    groupName: {
        type: String,
        required: true
    },
    // groupEvents: {

    // }
});

module.exports = Group;