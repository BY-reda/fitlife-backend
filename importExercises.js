const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Exercise = require('./models/Exercise');
const exercises = require('./data/exercises.json');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log('MongoDB connected');

        await Exercise.deleteMany();
        await Exercise.insertMany(exercises);

        console.log('Exercises imported successfully!');
        process.exit();
    })
    .catch(error => {
        console.error('Error:', error);
        process.exit(1);
    });
