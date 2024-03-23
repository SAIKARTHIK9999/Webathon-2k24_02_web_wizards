const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/fitness_tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema for your data
const profileSchema = new mongoose.Schema({
  fitnessGoals: String,
  activityLevel: String,
  healthMetrics: String,
});

const Profile = mongoose.model('Profile', profileSchema);

// Routes
app.post('/api/profiles', async (req, res) => {
  const { fitnessGoals, activityLevel, healthMetrics } = req.body;

  try {
    const newProfile = new Profile({ fitnessGoals, activityLevel, healthMetrics });
    const savedProfile = await newProfile.save();
    res.status(201).json(savedProfile);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving profile');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
