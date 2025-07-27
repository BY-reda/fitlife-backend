const express = require('express');
const {
  getDiary,
  saveDiary,
  deleteFoodFromMeal
} = require('../controllers/diaryController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', protect, getDiary);
router.post('/', protect, saveDiary);
router.delete('/:date/:mealType/:foodId', protect, deleteFoodFromMeal);

module.exports = router;
