const mongoose = require('mongoose');
const messageSchema = require('./Message');

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
    groupMembers: {
        type: [Schema.Types.ObjectId],
        ref: 'User'
    },
    groupPicture: {
        type: String
    },
    groupChat: [messageSchema]
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;