const express = require('express');
const router = express.Router();
const CatalogExercise = require('../models/AdminCatalogExercise');
const { protect } = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/isAdmin');

// ✅ GET all catalog exercises
router.get('/', async (req, res) => {
  try {
    const exercises = await CatalogExercise.find();
    res.json(exercises);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ GET one catalog exercise by ID
router.get('/:id', async (req, res) => {
  try {
    const exercise = await CatalogExercise.findById(req.params.id);
    if (!exercise) {
      return res.status(404).json({ message: 'Exercice non trouvé' });
    }
    res.json(exercise);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ POST new catalog exercise (admin only)
router.post('/', protect, isAdmin, async (req, res) => {
  const newExercise = new CatalogExercise(req.body);
  try {
    const savedExercise = await newExercise.save();
    res.status(201).json(savedExercise);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ✅ DELETE catalog exercise (admin only)
router.delete('/:id', protect, isAdmin, async (req, res) => {
  try {
    const deleted = await CatalogExercise.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.put('/:id', protect, isAdmin, async (req, res) => {
  try {
    const updatedExercise = await CatalogExercise.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedExercise) {
      return res.status(404).json({ message: 'Exercice non trouvé' });
    }

    res.json(updatedExercise);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


module.exports = router;
