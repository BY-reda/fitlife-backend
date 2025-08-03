const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register User
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      bio: "",
      followers: [],
      following: [],
        role: "user", 
    });

    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET || "your_super_secret_key_here",
      { expiresIn: "30d" }
    );

    res.status(201).json({
      message: "User registered successfully.",
      token,
  user: {
  _id: newUser._id,
  username: newUser.username,
  email: newUser.email,
  role: newUser.role,
  age: newUser.age,
  weight: newUser.weight,
  height: newUser.height,
  goal: newUser.goal,
  bio: newUser.bio,
  profileImage: newUser.profileImage,
  activityLevel: newUser.activityLevel,
  targetCalories: newUser.targetCalories,
  followers: newUser.followers,
  following: newUser.following,
},
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during registration." });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "your_super_secret_key_here",
      { expiresIn: "30d" }
    );

  res.json({
  token,
  user: {
  _id: user._id,
  username: user.username,
  email: user.email,
  role: user.role,
  age: user.age,
  weight: user.weight,
  height: user.height,
  goal: user.goal,
  bio: user.bio,
  profileImage: user.profileImage,
  activityLevel: user.activityLevel,
  targetCalories: user.targetCalories,
  followers: user.followers,
  following: user.following,
},

});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during login." });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
