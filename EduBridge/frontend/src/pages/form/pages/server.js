const express = require('express');
const mongodb = require('mongodb');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://wishhiranyaco:Wishmi99@formdata.akuxs7s.mongodb.net/?retryWrites=true&w=majority&appName=FormData';

const client = new mongodb.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) throw err;
  console.log("Connected to MongoDB");
  const collection = client.db("FormData").collection("formData");
  // Your routes go here

  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
});