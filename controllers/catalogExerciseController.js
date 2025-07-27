// controllers/catalogExerciseController.js
const CatalogExercise = require('../models/CatalogExercise');

const getCatalogExercises = async (req, res) => {
  try {
    const exercises = await CatalogExercise.find();
    res.json(exercises);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createCatalogExercise = async (req, res) => {
  const newExercise = new CatalogExercise(req.body);
  try {
    const savedExercise = await newExercise.save();
    res.status(201).json(savedExercise);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteCatalogExercise = async (req, res) => {
  try {
    const deleted = await CatalogExercise.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getCatalogExerciseById = async (req, res) => {
  try {
    const { id } = req.params;
    const exercise = await CatalogExercise.findById(id);

    if (!exercise) {
      return res.status(404).json({ message: 'Exercise not found' });
    }

    res.json(exercise);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const updateCatalogExercise = async (req, res) => {
  try {
    const { id } = req.params;
    // Trouver et mettre à jour l'exercice avec les nouvelles données dans req.body
    const updatedExercise = await CatalogExercise.findByIdAndUpdate(id, req.body, {
      new: true,            // retourne l'exercice mis à jour
      runValidators: true,  // valide les données selon le schéma
    });

    if (!updatedExercise) {
      return res.status(404).json({ message: 'Exercise not found' });
    }

    res.json(updatedExercise);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getCatalogExercises,
  createCatalogExercise,
  deleteCatalogExercise,
    getCatalogExerciseById, 
      updateCatalogExercise, 
};
