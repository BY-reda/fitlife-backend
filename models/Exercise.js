const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: String,
  muscleGroup: String,
  difficulty: String,
  equipment: String,
  restTime: String,
  recommended: String,
  image: String,
  instructions: [String],

  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: String }, 
});

module.exports = mongoose.model('Exercise', exerciseSchema);
