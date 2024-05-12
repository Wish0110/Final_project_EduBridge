const express = require('express');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3006;

app.use(cors({ // Apply CORS middleware
  origin: 'http://localhost:3000' // Allow requests from this origin
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://wishhiranyaco:Wishmi99@cluster2.omhtgbh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a new route to store student data in the database
app.post('/api/store-student', async (req, res) => {
  const newStudent = req.body;

  try {
    // Create a new student document in the database
    const student = new mongoose.model('Student', {
      studentId: String,
      title: String,
      gender: String,
      name: String,
      lastname: String,
      prvName: String,
      preferredName: String,
      dateOfBirth: String
    })(newStudent);

    await student.save();

    res.status(201).json({
      success: true,
      message: 'Student data stored successfully!'
    });
  } catch (error) {
    console.error('Error storing student data:', error);

    res.status(500).json({
      success: false,
      message: 'An error occurred while storing student data.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});