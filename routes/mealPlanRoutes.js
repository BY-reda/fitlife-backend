const express = require('express');
const router = express.Router();
const { getMealPlan } = require('../controllers/mealPlanController');

router.get('/:userId', getMealPlan);

module.exports = router;
