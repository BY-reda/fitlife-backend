const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    validate: {
      validator: function (value) {
        return this.authProvider === 'google' || !!value;
      },
      message: 'Password is required for local users.'
    }
  },

  profileImage: String,
  age: Number,
  weight: Number,
  height: Number,
  goal: String,

  gender: {
    type: String,
    enum: ['male', 'female'],
    default: 'male'
  },

  activityLevel: {
    type: String,
    enum: ['sedentary', 'light', 'moderate', 'active', 'very active'],
    default: 'moderate'
  },

  targetCalories: Number,

  exercises: [
    {
      id: String,
      name: String
    }
  ],

  authProvider: {
    type: String,
    enum: ['local', 'google'],
    default: 'local'
  },
    // ✅ New role field for admin support
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },

  // ✅ Ajouts :
  bio: {
    type: String,
    default: ''
  },

  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
