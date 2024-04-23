const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://wishhiranya:Wishmi99@cluster0.7vn9uie.mongodb.net/STUDENTS_RECORDS?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

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
    const students = await Student.find({ studentid: { $in: ['22017', '23209'] } });
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});