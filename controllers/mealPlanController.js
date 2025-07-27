const Food = require('../models/Food');
const User = require('../models/User');

function shuffleArray(arr) {
  // Fisher-Yates shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const generateMealPlan = (user, foods) => {
  const proteinPerKg = 2;
  const fatPerKg = 1.2;
  const proteinTarget = user.weight * proteinPerKg;
  const fatTarget = user.weight * fatPerKg;
  const carbTarget = (user.targetCalories - (proteinTarget * 4 + fatTarget * 9)) / 4;

  const mealTypes = ['breakfast', 'lunch', 'snack', 'dinner'];
  const macroSplits = {
    breakfast: { protein: 0.25, carbs: 0.35, fat: 0.20 },
    lunch:     { protein: 0.35, carbs: 0.30, fat: 0.35 },
    snack:     { protein: 0.15, carbs: 0.20, fat: 0.20 },
    dinner:    { protein: 0.25, carbs: 0.15, fat: 0.25 }
  };

  const foodRules = {
    maxServings: {
      'Egg': 2,
      'Cheese': 1,
      'Oats': 1,
      'Almonds': 1,
      'Peanut Butter': 1,
      default: 2
    },
    portionLimits: {
      protein: { min: 20, max: 150 },
      carbs: { min: 20, max: 100 },
      fat: { min: 5, max: 50 }
    }
  };

  const usedFoods = new Set();
  const usedCategories = new Set();

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const pickFood = (availableFoods, macro, target, meal) => {
    let candidates = availableFoods.filter(food => 
      food[macro] > 0 && !usedFoods.has(food.name)
    );

    if (candidates.length === 0) {
      candidates = availableFoods.filter(food => 
        food[macro] > 0 && !usedCategories.has(food.name.split('#')[0].trim())
      );
    }

    if (candidates.length === 0) {
      candidates = availableFoods.filter(food => food[macro] > 0);
    }

    shuffleArray(candidates);

    for (const food of candidates) {
      const category = food.name.split('#')[0].trim();
      const maxServings = foodRules.maxServings[category] || foodRules.maxServings.default;
      if (usedCategories.has(category)) continue;

      const { min, max } = foodRules.portionLimits[macro];
      let grams = Math.min(
        Math.round((target / food[macro]) * 100),
        max
      );
      grams = Math.max(min, grams);

      let units = null;
      if (food.gramsPerUnit) {
        units = Math.max(1, Math.round(grams / food.gramsPerUnit)); // ensure at least 1 unit
        grams = units * food.gramsPerUnit;
      }

      usedFoods.add(food.name);
      usedCategories.add(category);

      return {
        name: food.name,
        quantity: units && food.unit
          ? `${units} ${food.unit}${units > 1 ? 's' : ''}`
          : `${grams}g`,
        quantityGrams: grams,
        quantityUnits: units,
        unitName: food.unit || null,
        calories: +(food.calories * grams / 100).toFixed(1),
        protein: +(food.protein * grams / 100).toFixed(1),
        carbs: +(food.carbs * grams / 100).toFixed(1),
        fat: +(food.fat * grams / 100).toFixed(1)
      };
    }
    return null;
  };

  const meals = {};
  for (const meal of mealTypes) {
    const { protein, carbs, fat } = macroSplits[meal];
    const targets = {
      protein: proteinTarget * protein,
      carbs: carbTarget * carbs,
      fat: fatTarget * fat
    };

    const mealFoods = foods.filter(f => f.meals.includes(meal));
    const proteinFoods = mealFoods.filter(f => f.protein >= 5);
    const carbFoods = mealFoods.filter(f => f.carbs >= 5);
    const fatFoods = mealFoods.filter(f => f.fat >= 3);

    const items = [
      pickFood(proteinFoods, 'protein', targets.protein, meal),
      pickFood(carbFoods, 'carbs', targets.carbs, meal),
      pickFood(fatFoods, 'fat', targets.fat, meal)
    ].filter(Boolean);

    meals[meal] = items;
  }

  return {
    meals,
    targets: {
      calories: Math.round(user.targetCalories),
      protein: Math.round(proteinTarget),
      fat: Math.round(fatTarget),
      carbs: Math.round(carbTarget)
    }
  };
};

const getMealPlan = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const foods = await Food.find();
    const mealPlan = generateMealPlan(user, foods);

    res.json(mealPlan);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getMealPlan };
