const express = require('express');
const router = express.Router();
const isAdmin = require('../middlewares/isAdmin');
const { protect } = require('../middlewares/authMiddleware');
const CatalogExercise = require('../models/AdminCatalogExercise');
const Exercise = require('../models/Exercise');

const {
  createExercise,
  getExercises,
  getUserExercises,
  saveExerciseToUser,
  deleteUserExercise,
  getCatalogExercises,
  createCatalogExercise,
} = require('../controllers/exerciseController');

// Public exercises (without userId)
router.get('/', getExercises);

// User's own exercises
router.get('/my-exercises', protect, getUserExercises);

// Save a new exercise for the user
router.post('/save', protect, saveExerciseToUser);

// Delete a user exercise
router.delete('/:id', protect, deleteUserExercise);



// Admin-only: create exercise (could be public or admin-specific)
router.post('/', protect, isAdmin, createExercise);

// Catalog routes
// Get all catalog exercises (public)
router.get('/catalog', getCatalogExercises);

// Admin create new catalog exercise
router.post('/catalog', protect, isAdmin, createCatalogExercise);

module.exports = router;
