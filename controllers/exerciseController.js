const Exercise = require('../models/Exercise');
const dayjs = require('dayjs');
const CatalogExercise = require('../models/AdminCatalogExercise');

// --- Exercices Utilisateurs/Admin ---

// Récupérer tous les exercices publics (sans userId)
const getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find({ userId: { $exists: false } });
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ message: 'Erreur interne du serveur' });
  }
};

// Récupérer les exercices personnalisés de l'utilisateur
const getUserExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find({ userId: req.user._id });
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ message: 'Erreur interne du serveur' });
  }
};

// Sauvegarder un exercice personnalisé pour l'utilisateur
const saveExerciseToUser = async (req, res) => {
  try {
    const {
      name,
      muscleGroup,
      difficulty,
      equipment,
      restTime,
      recommended,
      image,
      instructions,
      date,
    } = req.body;

    const dateOnly = date
      ? dayjs(date).format('YYYY-MM-DD')
      : dayjs().format('YYYY-MM-DD');

    const existing = await Exercise.findOne({
      name,
      userId: req.user._id,
      date: dateOnly,
    });

    if (existing) {
      return res.status(409).json({ message: 'Exercice déjà ajouté pour ce jour' });
    }

    const newExercise = new Exercise({
      name,
      muscleGroup,
      difficulty,
      equipment,
      restTime,
      recommended,
      image,
      instructions,
      userId: req.user._id,
      date: dateOnly,
    });

    await newExercise.save();
    res.status(201).json(newExercise);
  } catch (error) {
    console.error('Erreur lors de la sauvegarde :', error);
    res.status(500).json({ message: 'Erreur interne du serveur' });
  }
};

// Supprimer un exercice personnalisé
const deleteUserExercise = async (req, res) => {
  try {
    const exerciseId = req.params.id;
    const userId = req.user._id;
    const date = req.query.date;

    if (!date) {
      return res.status(400).json({ message: "Date manquante dans la requête" });
    }

    const dateOnly = dayjs(date).format('YYYY-MM-DD');

    const deleted = await Exercise.findOneAndDelete({
      _id: exerciseId,
      userId,
      date: dateOnly,
    });

    if (!deleted) {
      return res.status(404).json({ message: "Exercice introuvable pour cette date et cet utilisateur" });
    }

    res.status(200).json({ message: "Exercice supprimé avec succès" });
  } catch (error) {
    console.error("Erreur suppression :", error);
    res.status(500).json({ message: "Erreur interne" });
  }
};

// Créer un exercice public (admin only)
const createExercise = async (req, res) => {
  try {
    const {
      name,
      muscleGroup,
      difficulty,
      equipment,
      restTime,
      recommended,
      image,
      instructions,
      date,
    } = req.body;

    if (!name || !muscleGroup) {
      return res.status(400).json({ message: 'Nom et groupe musculaire requis.' });
    }

    const userId = req.user._id; // admin id depuis le token (middleware protect)

    const dateOnly = date ? dayjs(date).format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD');

    const newExercise = new Exercise({
      name,
      muscleGroup,
      difficulty,
      equipment,
      restTime,
      recommended,
      image,
      instructions,
      userId,
      date: dateOnly,
    });

    await newExercise.save();
    res.status(201).json(newExercise);
  } catch (error) {
    console.error("Erreur lors de la création d'un exercice admin:", error);
    res.status(500).json({ message: 'Erreur interne du serveur' });
  }
};

// --- Exercices Catalogue (catalog exercises) ---

// Récupérer tous les exercices du catalogue (public)
const getCatalogExercises = async (req, res) => {
  try {
    const exercises = await CatalogExercise.find({});
    res.status(200).json(exercises);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur lors de la récupération du catalogue' });
  }
};

// Créer un exercice dans le catalogue (admin only)
const createCatalogExercise = async (req, res) => {
  try {
    const {
      name,
      muscleGroup,
      difficulty,
      equipment,
      restTime,
      recommended,
      image,
      instructions,
    } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Le nom est requis' });
    }

    const newCatalogExercise = new CatalogExercise({
      name,
      muscleGroup,
      difficulty,
      equipment,
      restTime,
      recommended,
      image,
      instructions,
      isPublic: true,
    });

    await newCatalogExercise.save();
    res.status(201).json(newCatalogExercise);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur lors de la création du catalogue' });
  }
};

module.exports = {
  getExercises,
  getUserExercises,
  saveExerciseToUser,
  deleteUserExercise,
  createExercise,
  getCatalogExercises,
  createCatalogExercise,
};
