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

const profileSchema = new mongoose.Schema({
  fitnessGoals: String,
  activityLevel: String,
  healthMetrics: String,
});

const activitySchema = new mongoose.Schema({
  activity: String,
  duration: Number,
  caloriesBurned: Number,
});

const Profile = mongoose.model('Profile', profileSchema);
const Activity = mongoose.model('Activity', activitySchema);



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

app.post('/api/activities', async (req, res) => {
  const { activity, duration } = req.body;
  // Calculate calories burned based on the activity and duration
  let caloriesPerMinute;
  if (activity === 'walking') {
    caloriesPerMinute = 5; // Example value, adjust as needed
  } else if (activity === 'jogging') {
    caloriesPerMinute = 10; // Example value, adjust as needed
  } else {
    caloriesPerMinute = 0; // Default value
  }
  const caloriesBurned = caloriesPerMinute * duration;
  try {
    const newActivity = new Activity({ activity, duration, caloriesBurned });
    const savedActivity = await newActivity.save();
    res.status(201).json(savedActivity);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging activity');
  }
});

// Function to retrieve submitted data
app.get('/api/profiles', async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.status(200).json(profiles);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving profiles');
  }
});

// GET route to retrieve activity and duration
app.get('/api/activities', async (req, res) => {
  try {
    // You need to implement the logic to retrieve activity and duration here
    // For now, let's just send back a placeholder response
    res.status(200).json({ activity: 'placeholder_activity', duration: 'placeholder_duration' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving activity and duration');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
