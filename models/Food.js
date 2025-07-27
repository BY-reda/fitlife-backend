const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true }, // per 100g
  protein: { type: Number, required: true },  // per 100g
  carbs: { type: Number, required: true },    // per 100g
  fat: { type: Number, required: true },      // per 100g
  meals: { type: [String], default: [] },     // meal categories like breakfast, lunch, etc.

  // Updated optional fields for unit-based foods
  gramsPerUnit: { type: Number, default: null }, // weight in grams of one unit (e.g. 50 for 1 egg)
  unit: { type: String, default: null },         // unit name (e.g. "egg", "piece", "slice")
});

module.exports = mongoose.model('Food', FoodSchema);
