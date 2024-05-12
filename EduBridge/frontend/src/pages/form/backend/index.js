const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://wishhiranyaco:Wishmi99@cluster2.omhtgbh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define a Mongoose schema for the form data
const formSchema = new mongoose.Schema({
  studentId: String,
  title: String,
  name: String,
  lastname: String,
  prvName: String,
  preferredName: String,
  dateOfBirth: String,
  gender: String
});

// Create a Mongoose model for the form data
const FormData = mongoose.model('FormData', formSchema);

// Define a route to handle form submissions
app.post('/api/submit-form', async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});

// Start the server
app.listen(3001, () => {
  console.log('Server listening on port 3001');
});