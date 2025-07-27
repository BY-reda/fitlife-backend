const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json({ limit: '5mb' }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/exercises', require('./routes/exerciseRoutes'));
app.use('/api/diary', require('./routes/diary'));
app.use('/api/posts', require('./routes/post'));

const mealPlanRoutes = require('./routes/mealPlanRoutes');
app.use('/api/mealplan', mealPlanRoutes);
// Static uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Catalog exercises routes under /api
const catalogExercisesRouter = require('./routes/catalogExercises');
app.use('/api/catalog-exercises', catalogExercisesRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ message: 'Erreur serveur' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
