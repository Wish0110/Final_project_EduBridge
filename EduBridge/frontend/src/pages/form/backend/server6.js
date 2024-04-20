const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://wishhiranyaco:Wishmi99@formdata.akuxs7s.mongodb.net/?retryWrites=true&w=majority&appName=FormData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a Student schema and model
const studentSchema = new mongoose.Schema({
  studentId: String,
  name: String,
  lastname: String,
  prvName: String,
  preferredName: String,
  dateOfBirth: String,
  title: String,
  gender: String,
});

const Student = mongoose.model('Student', studentSchema);

// Add a route to handle the form submission
app.post('/api/fetch-student', async (req, res) => {
  const { studentId } = req.body;
  const student = await Student.findOne({ studentId });

  if (student) {
    res.json({ success: true, data: student });
  } else {
    res.json({ success: false, message: 'Student not found' });
  }
});

// Start the server
const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});