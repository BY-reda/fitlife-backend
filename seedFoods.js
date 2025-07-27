const mongoose = require('mongoose');
const Food = require('./models/Food'); // adjust path if needed
const foodsData = [

  
  
 
   {
    "name": "Egg #1",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #1",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #1",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #1",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #1",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #1",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #1",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #1",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #1",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #1",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #2",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #2",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #2",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #2",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #2",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #2",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #2",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #2",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #2",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #2",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #3",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #3",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #3",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #3",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #3",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #3",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #3",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #3",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #3",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #3",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #4",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #4",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #4",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #4",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #4",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #4",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #4",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #4",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #4",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #4",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #5",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #5",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #5",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #5",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #5",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #5",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #5",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #5",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #5",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #5",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #6",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #6",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #6",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #6",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #6",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #6",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #6",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #6",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #6",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #6",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #7",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #7",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #7",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #7",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #7",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #7",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #7",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #7",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #7",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #7",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #8",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #8",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #8",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #8",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #8",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #8",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #8",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #8",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #8",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #8",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #9",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #9",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #9",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #9",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #9",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #9",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #9",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #9",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #9",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #9",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #10",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #10",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #10",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #10",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #10",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #10",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #10",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #10",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #10",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #10",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #11",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #11",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #11",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #11",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #11",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #11",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #11",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #11",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #11",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #11",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #12",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #12",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #12",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #12",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #12",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #12",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #12",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #12",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #12",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #12",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #13",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #13",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #13",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #13",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #13",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #13",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #13",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #13",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #13",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #13",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #14",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #14",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #14",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #14",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #14",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #14",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #14",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #14",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #14",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #14",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #15",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #15",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #15",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #15",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #15",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #15",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #15",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #15",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #15",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #15",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #16",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #16",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #16",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #16",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #16",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #16",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #16",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #16",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #16",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #16",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #17",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #17",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #17",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #17",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #17",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #17",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #17",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #17",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #17",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #17",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #18",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #18",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #18",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #18",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #18",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #18",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #18",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #18",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #18",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #18",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #19",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #19",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #19",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #19",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #19",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #19",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #19",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #19",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #19",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #19",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #20",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #20",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #20",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #20",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #20",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #20",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #20",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #20",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #20",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #20",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #21",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #21",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #21",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #21",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #21",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #21",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #21",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #21",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #21",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #21",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #22",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #22",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #22",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #22",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #22",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #22",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #22",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #22",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #22",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #22",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #23",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #23",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #23",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #23",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #23",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #23",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #23",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #23",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #23",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #23",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #24",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #24",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #24",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #24",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #24",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #24",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #24",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #24",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #24",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #24",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #25",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #25",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #25",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #25",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #25",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #25",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #25",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #25",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #25",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #25",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #26",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #26",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #26",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #26",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #26",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #26",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #26",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #26",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #26",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #26",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #27",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #27",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #27",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #27",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #27",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #27",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #27",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #27",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #27",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #27",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #28",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #28",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #28",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #28",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #28",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #28",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #28",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #28",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #28",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #28",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #29",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #29",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #29",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #29",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #29",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #29",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #29",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #29",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #29",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #29",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #30",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #30",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #30",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #30",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #30",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #30",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #30",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #30",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #30",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #30",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #31",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #31",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #31",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #31",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #31",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #31",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #31",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #31",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #31",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #31",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #32",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #32",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #32",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #32",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #32",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #32",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #32",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #32",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #32",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #32",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #33",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #33",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #33",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #33",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #33",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #33",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #33",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #33",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #33",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #33",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #34",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #34",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #34",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #34",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #34",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #34",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #34",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #34",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #34",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #34",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #35",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #35",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #35",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #35",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #35",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #35",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #35",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #35",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #35",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #35",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #36",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #36",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #36",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #36",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #36",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #36",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #36",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #36",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #36",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #36",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #37",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #37",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #37",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #37",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #37",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #37",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #37",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #37",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #37",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #37",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #38",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #38",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #38",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #38",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #38",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #38",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #38",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #38",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #38",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #38",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #39",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #39",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #39",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #39",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #39",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #39",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #39",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #39",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #39",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #39",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #40",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #40",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #40",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #40",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #40",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #40",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #40",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #40",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #40",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #40",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #41",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #41",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #41",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #41",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #41",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #41",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #41",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #41",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #41",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #41",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #42",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #42",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #42",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #42",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #42",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #42",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #42",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #42",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #42",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #42",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #43",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #43",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #43",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #43",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #43",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #43",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #43",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #43",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #43",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #43",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #44",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #44",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #44",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #44",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #44",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #44",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #44",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #44",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #44",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #44",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #45",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #45",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #45",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #45",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #45",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #45",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #45",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #45",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #45",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #45",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #46",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #46",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #46",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #46",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #46",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #46",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #46",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #46",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #46",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #46",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #47",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #47",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #47",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #47",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #47",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #47",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #47",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #47",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #47",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #47",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #48",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #48",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #48",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #48",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #48",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #48",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #48",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #48",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #48",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #48",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #49",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #49",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #49",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #49",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #49",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #49",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #49",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #49",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #49",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #49",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #50",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #50",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #50",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #50",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #50",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #50",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #50",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #50",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #50",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #50",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #51",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #51",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #51",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #51",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #51",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #51",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #51",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #51",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #51",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #51",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #52",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #52",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #52",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #52",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #52",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #52",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #52",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #52",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #52",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #52",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #53",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #53",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #53",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #53",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #53",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #53",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #53",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #53",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #53",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #53",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #54",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #54",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #54",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #54",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #54",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #54",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #54",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #54",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #54",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #54",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #55",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #55",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #55",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #55",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #55",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #55",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #55",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #55",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #55",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #55",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #56",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #56",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #56",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #56",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #56",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #56",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #56",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #56",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #56",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #56",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #57",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #57",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #57",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #57",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #57",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #57",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #57",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #57",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #57",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #57",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #58",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #58",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #58",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #58",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #58",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #58",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #58",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #58",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #58",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #58",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #59",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #59",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #59",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #59",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #59",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #59",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #59",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #59",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #59",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #59",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #60",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #60",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #60",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #60",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #60",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #60",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #60",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #60",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #60",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #60",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #61",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #61",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #61",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #61",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #61",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #61",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #61",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #61",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #61",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #61",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #62",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #62",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #62",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #62",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #62",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #62",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #62",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #62",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #62",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #62",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #63",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #63",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #63",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #63",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #63",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #63",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #63",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #63",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #63",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #63",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #64",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #64",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #64",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #64",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #64",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #64",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #64",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #64",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #64",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #64",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #65",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #65",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #65",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #65",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #65",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #65",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #65",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #65",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #65",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #65",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #66",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #66",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #66",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #66",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #66",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #66",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #66",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #66",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #66",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #66",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #67",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #67",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #67",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #67",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #67",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #67",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #67",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #67",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #67",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #67",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #68",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #68",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #68",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #68",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #68",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #68",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #68",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #68",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #68",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #68",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #69",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #69",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #69",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #69",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #69",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #69",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #69",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #69",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #69",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #69",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #70",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #70",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #70",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #70",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #70",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #70",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #70",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #70",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #70",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #70",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #71",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #71",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #71",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #71",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #71",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #71",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #71",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #71",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #71",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #71",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #72",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #72",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #72",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #72",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #72",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #72",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #72",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #72",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #72",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #72",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #73",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #73",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #73",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #73",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #73",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #73",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #73",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #73",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #73",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #73",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #74",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #74",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #74",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #74",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #74",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #74",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #74",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #74",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #74",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #74",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #75",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #75",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #75",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #75",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #75",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #75",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #75",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #75",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #75",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #75",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #76",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #76",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #76",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #76",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #76",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #76",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #76",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #76",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #76",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #76",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #77",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #77",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #77",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #77",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #77",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #77",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #77",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #77",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #77",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #77",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #78",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #78",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #78",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #78",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #78",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #78",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #78",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #78",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #78",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #78",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #79",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #79",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #79",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #79",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #79",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #79",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #79",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #79",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #79",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #79",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #80",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #80",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #80",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #80",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #80",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #80",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #80",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #80",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #80",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #80",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #81",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #81",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #81",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #81",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #81",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #81",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #81",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #81",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #81",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #81",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #82",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #82",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #82",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #82",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #82",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #82",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #82",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #82",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #82",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #82",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #83",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #83",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #83",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #83",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #83",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #83",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #83",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #83",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #83",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #83",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #84",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #84",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #84",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #84",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #84",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #84",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #84",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #84",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #84",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #84",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #85",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #85",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #85",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #85",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #85",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #85",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #85",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #85",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #85",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #85",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #86",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #86",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #86",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #86",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #86",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #86",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #86",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #86",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #86",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #86",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #87",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #87",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #87",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #87",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #87",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #87",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #87",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #87",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #87",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #87",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #88",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #88",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #88",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #88",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #88",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #88",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #88",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #88",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #88",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #88",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #89",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #89",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #89",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #89",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #89",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #89",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #89",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #89",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #89",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #89",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #90",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #90",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #90",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #90",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #90",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #90",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #90",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #90",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #90",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #90",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #91",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #91",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #91",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #91",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #91",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #91",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #91",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #91",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #91",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #91",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #92",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #92",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #92",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #92",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #92",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #92",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #92",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #92",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #92",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #92",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #93",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #93",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #93",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #93",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #93",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #93",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #93",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #93",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #93",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #93",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #94",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #94",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #94",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #94",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #94",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #94",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #94",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #94",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #94",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #94",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #95",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #95",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #95",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #95",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #95",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #95",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #95",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #95",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #95",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #95",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #96",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #96",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #96",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #96",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #96",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #96",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #96",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #96",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #96",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #96",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #97",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #97",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #97",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #97",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #97",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #97",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #97",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #97",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #97",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #97",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #98",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #98",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #98",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #98",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #98",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #98",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #98",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #98",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #98",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #98",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #99",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #99",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #99",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #99",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #99",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #99",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #99",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #99",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #99",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #99",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Egg #100",
    "calories": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "unit": "1 egg",
    "gramsPerUnit": 50,
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Olive Oil #100",
    "calories": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "unit": "1 tbsp",
    "gramsPerUnit": 13.5,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Whole Wheat Bread #100",
    "calories": 69,
    "protein": 3.6,
    "carbs": 11.6,
    "fat": 1.1,
    "unit": "1 slice",
    "gramsPerUnit": 28,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Banana #100",
    "calories": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.3,
    "unit": "1 banana",
    "gramsPerUnit": 118,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Chicken Breast #100",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Tomato #100",
    "calories": 22,
    "protein": 1.1,
    "carbs": 4.8,
    "fat": 0.2,
    "unit": "1 medium",
    "gramsPerUnit": 123,
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ]
  },
  {
    "name": "Yogurt (Plain) #100",
    "calories": 59,
    "protein": 10,
    "carbs": 3.6,
    "fat": 0.4,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "breakfast",
      "snack"
    ]
  },
  {
    "name": "Lentils #100",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 0.8,
    "unit": "1 cup cooked",
    "gramsPerUnit": 198,
    "meals": [
      "lunch",
      "dinner"
    ]
  },
  {
    "name": "Apple #100",
    "calories": 95,
    "protein": 0.5,
    "carbs": 25,
    "fat": 0.3,
    "unit": "1 medium",
    "gramsPerUnit": 182,
    "meals": [
      "snack",
      "breakfast"
    ]
  },
  {
    "name": "Sardines (canned in oil) #100",
    "calories": 191,
    "protein": 22.7,
    "carbs": 0,
    "fat": 10.5,
    "unit": "100g",
    "gramsPerUnit": 100,
    "meals": [
      "lunch",
      "dinner"
    ]
  }


];

async function seedFoods() {
  try {
    await mongoose.connect('mongodb://localhost:27017/fitnessapp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Optional: clear existing foods to avoid duplicates
    await Food.deleteMany({});

    // Insert new food data
    await Food.insertMany(foodsData);

    console.log('Food data seeded successfully!');
    process.exit();
  } catch (error) {
    console.error('Error seeding food data:', error);
    process.exit(1);
  }
}

seedFoods();
