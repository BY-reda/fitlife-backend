const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  name: String,
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
  quantity: Number
});

const MealSchema = new mongoose.Schema({
  mealType: {
    type: String,
    enum: ['breakfast', 'lunch', 'dinner', 'snack'],
    required: true
  },
  foods: [FoodSchema]
}, { _id: false });

const DiarySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: String, // format YYYY-MM-DD
    required: true,
    match: /^\d{4}-\d{2}-\d{2}$/
  },
  meals: [MealSchema],
  water: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

DiarySchema.index({ user: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('Diary', DiarySchema);