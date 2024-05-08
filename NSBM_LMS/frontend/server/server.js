// Improved code with some suggestions
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
const connectToMongoDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://wishhiranya:Wishmi99@cluster0.7vn9uie.mongodb.net/STUDENTS_RECORDS?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Exit the process if connection fails
  }
};

// Define student schema
const studentSchema = new mongoose.Schema({
  name: String,
  studentid: String,
  degree: String,
  lastname: String,
});

// Create student model
const Student = mongoose.model('Student', studentSchema);

// Get all students
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find().exec(); // Use exec() to return a promise
    res.json({ data: students.map(student => student.toObject()) }); // Convert Mongoose documents to plain objects
  } catch (err) {
    console.error('Error fetching students:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start server
const port = process.env.PORT || 4000;
connectToMongoDB().then(() => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
});