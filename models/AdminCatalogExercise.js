const mongoose = require('mongoose');

const catalogExerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  muscleGroup: String,
  difficulty: String,
  equipment: String,
  restTime: String,
  recommended: String,
  image: String,
  instructions: [String],
  isPublic: { type: Boolean, default: true }, // toujours public
}, {
  timestamps: true,
});

module.exports = mongoose.model('CatalogExercise', catalogExerciseSchema);
