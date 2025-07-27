const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// GET current user profile
router.get("/me", protect, async (req, res) => {
  try {
    if (!req.user || !req.user._id) {
      return res.status(401).json({ message: "Non autorisé" });
    }
const user = await User.findById(req.user._id).select(
  "username email weight height age goal gender activityLevel targetCalories exercises bio followers following profileImage role"
);

    if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur lors de la récupération de l'utilisateur" });
  }
});

// UPDATE user profile (general info)
router.put("/me", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });

    // Mise à jour des champs uniquement s'ils sont présents dans req.body
    [
      "username",
      "age",
      "weight",
      "height",
      "goal",
      "profileImage",
      "gender",
      "activityLevel",
      "targetCalories",
      "bio",
    ].forEach(field => {
      if (req.body[field] !== undefined) {
        user[field] = req.body[field];
      }
    });

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      age: updatedUser.age,
      weight: updatedUser.weight,
      height: updatedUser.height,
      goal: updatedUser.goal,
      profileImage: updatedUser.profileImage,
      gender: updatedUser.gender,
      activityLevel: updatedUser.activityLevel,
      targetCalories: updatedUser.targetCalories,
      exercises: updatedUser.exercises,
      bio: updatedUser.bio,
      followers: updatedUser.followers,
      following: updatedUser.following,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur lors de la mise à jour du profil" });
  }
});

// ADD exercise
router.post("/me/exercises", protect, async (req, res) => {
  try {
    const { id, name } = req.body;
    if (!id || !name) return res.status(400).json({ message: "Id et nom de l'exercice requis" });

    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });

    if (!user.exercises.some((ex) => ex.id === id)) {
      user.exercises.push({ id, name });
      await user.save();
    }

    res.json(user.exercises);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Échec de l'ajout de l'exercice" });
  }
});

// REMOVE exercise
router.delete("/me/exercises/:id", protect, async (req, res) => {
  try {
    const exerciseId = req.params.id;
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });

    const originalLength = user.exercises.length;
    user.exercises = user.exercises.filter((ex) => ex.id !== exerciseId);

    if (user.exercises.length === originalLength) {
      return res.status(404).json({ message: "Exercice non trouvé" });
    }

    await user.save();
    res.json(user.exercises);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Échec de la suppression de l'exercice" });
  }
});

// UPDATE email and/or password
router.put("/me/credentials", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });

    const { newEmail, oldPassword, newPassword } = req.body;

    if (newPassword) {
      if (!oldPassword) return res.status(400).json({ message: "Ancien mot de passe requis" });
      if (!user.password) {
        return res.status(400).json({ message: "Modification de mot de passe non autorisée pour les comptes Google" });
      }

      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch) return res.status(400).json({ message: "Ancien mot de passe incorrect" });

      const hashed = await bcrypt.hash(newPassword, 10);
      user.password = hashed;
    }

    if (newEmail && newEmail !== user.email) {
      const exists = await User.findOne({ email: newEmail });
      if (exists) return res.status(400).json({ message: "Email déjà utilisé" });

      user.email = newEmail;
    }

    const updatedUser = await user.save();
    res.json({
      message: "Informations d'identification mises à jour avec succès",
      email: updatedUser.email,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur lors de la mise à jour des informations d'identification" });
  }
});

// GET user public profile by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// FOLLOW a user
router.post("/follow/:id", protect, async (req, res) => {
  const currentUserId = req.user._id;
  const { id } = req.params;

  if (id === currentUserId.toString()) return res.status(400).json({ message: "Vous ne pouvez pas vous suivre vous-même" });

  try {
    const userToFollow = await User.findById(id);
    const currentUser = await User.findById(currentUserId);

    if (!userToFollow || !currentUser) {
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }

    if (!userToFollow.followers.includes(currentUserId)) {
      userToFollow.followers.push(currentUserId);
      currentUser.following.push(userToFollow._id);

      // Remove duplicates just in case
      userToFollow.followers = [...new Set(userToFollow.followers.map(String))];
      currentUser.following = [...new Set(currentUser.following.map(String))];

      await userToFollow.save();
      await currentUser.save();

      res.status(200).json({ message: "Utilisateur suivi" });
    } else {
      res.status(400).json({ message: "Vous suivez déjà cet utilisateur" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur lors de la tentative de suivre l'utilisateur" });
  }
});

// UNFOLLOW a user
router.post("/unfollow/:id", protect, async (req, res) => {
  const currentUserId = req.user._id;
  const { id } = req.params;

  try {
    const userToUnfollow = await User.findById(id);
    const currentUser = await User.findById(currentUserId);

    if (!userToUnfollow || !currentUser) {
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }

    userToUnfollow.followers = userToUnfollow.followers.filter(
      (uid) => uid.toString() !== currentUserId.toString()
    );
    currentUser.following = currentUser.following.filter(
      (uid) => uid.toString() !== id
    );

    await userToUnfollow.save();
    await currentUser.save();

    res.status(200).json({ message: "Utilisateur désabonné" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur lors de la tentative de désabonnement" });
  }
});

module.exports = router;
