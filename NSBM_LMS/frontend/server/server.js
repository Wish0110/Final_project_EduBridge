const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://wishhiranya:Wishmi99@cluster0.7vn9uie.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a simple student model
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
const Student = mongoose.model('Student', studentSchema);

// Add a route to get all students
app.get('/api/students', async (req, res) => {
  const students = await Student.find({});
  res.json(students);
});

// Add a route to add a new student
app.post('/api/students', async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json(student);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));