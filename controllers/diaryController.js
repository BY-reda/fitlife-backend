const Diary = require('../models/Diary');
const dayjs = require('dayjs');

exports.getDiary = async (req, res) => {
  try {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ message: 'Date is required' });
    }

    const formattedDate = dayjs(date).format('YYYY-MM-DD');

    const diary = await Diary.findOne({
      user: req.user._id,
      date: formattedDate
    });

    res.status(200).json(diary || null);
  } catch (err) {
    console.error('Error fetching diary:', err);
    res.status(500).json({ message: 'Failed to fetch diary' });
  }
};

exports.saveDiary = async (req, res) => {
  try {
    const { date, meals, water } = req.body;

    if (!date) {
      return res.status(400).json({ message: 'Date is required' });
    }

    // On récupère la date telle qu'elle vient du front, sans la modifier
    const diary = await Diary.findOneAndUpdate(
      { user: req.user._id, date: date },
      {
        meals,
        water,
        user: req.user._id,
        date: date
      },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true
      }
    );

    res.status(200).json({ message: 'Diary saved successfully', diary });
  } catch (err) {
    console.error('Error saving diary:', err);
    res.status(500).json({ message: 'Failed to save diary' });
  }
};

// 🔧 New: PATCH to update a food item in a meal
exports.updateFoodItem = async (req, res) => {
  const { date, mealType, foodId } = req.params;
  const formattedDate = dayjs(date).format('YYYY-MM-DD');
  const { name, quantity, calories, protein, carbs, fat } = req.body;

  try {
    const diary = await Diary.findOne({ user: req.user._id, date: formattedDate });
    if (!diary) return res.status(404).json({ message: 'Diary not found' });

    const meal = diary.meals.find((m) => m.mealType === mealType);
    if (!meal) return res.status(404).json({ message: 'Meal not found' });

    const food = meal.foods.id(foodId);
    if (!food) return res.status(404).json({ message: 'Food item not found' });

    // Update fields
    food.name = name;
    food.quantity = quantity;
    food.calories = calories;
    food.protein = protein;
    food.carbs = carbs;
    food.fat = fat;

    await diary.save();
    res.status(200).json({ message: 'Food item updated successfully', diary });
  } catch (err) {
    console.error('Error updating food item:', err);
    res.status(500).json({ message: 'Failed to update food item' });
  }
};


// DELETE /api/diary/:date/:mealType/:foodId
exports.deleteFoodFromMeal = async (req, res) => {
  const { date, mealType, foodId } = req.params;
  const formattedDate = dayjs(date).format("YYYY-MM-DD");

  try {
    const updateResult = await Diary.updateOne(
      { user: req.user._id, date: formattedDate },
      { $pull: { "meals.$[meal].foods": { _id: foodId } } },
      {
        arrayFilters: [{ "meal.mealType": mealType }],
      }
    );

    if (updateResult.modifiedCount === 0) {
      return res
        .status(404)
        .json({ message: "Food item not found or already deleted" });
    }

    res.status(200).json({ message: "Food deleted" });
  } catch (err) {
    console.error("Error deleting food:", err);
    res.status(500).json({ message: "Failed to delete food" });
  }
};
