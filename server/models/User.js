const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  profilePic: {
    type: String
  },
  unavailableDays: {
    type: [String],
    enum: {
      values: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], message: 'Days of the week only!' 
    }
  },
  groups: [{
    type: Schema.Types.ObjectId,
    ref: 'Group'
}],
 pendingInvites: [{
  type: Schema.Types.ObjectId,
  ref: 'Group'
 }],
});

// Set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  console.log(this.password);
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
