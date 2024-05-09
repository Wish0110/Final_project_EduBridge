const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { google } = require('googleapis');

const app = express();
const PORT = process.env.PORT || 3005;

// Google Cloud Translation API setup
const translationApi = google.translate('v2');
const apiKey = process.env.GOOGLE_API_KEY;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Fetch student data from MongoDB
app.post('/api/fetch-student', async (req, res) => {
  const studentId = req.body.studentId;
  try {
    const data = JSON.stringify({
      collection: "students",
      database: "studentrecords",
      dataSource: "Cluster0",
      filter: {
        studentid: studentId
      }
    });

    const config = {
      method: 'post',
      url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-zwwqd/endpoint/data/v1/action/findOne',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': process.env.MONGODB_API_KEY
      },
      data
    };

    const response = await axios(config);
    const student = response.data.document;

    if (student) {
      res.status(200).json({
        success: true,
        data: {
          name: student.name,
          studentId: student.studentid,
          degree: student.degree,
          gpa: student.gpa,
          sports: student.sports,
          faculty: student.faculty,
          Discipline: student.Discipline,
          class: student.class,
          extracurry: student.extracurry,
          Finalproject: student.Finalproject,
        }
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Student not found.'
      });
    }
  } catch (error) {
    console.error('Error fetching student data:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching student data.'
    });
  }
});

// Generate letter using Google Cloud Translation API
app.post('/api/generate-letter', async (req, res) => {
  try {
    const studentData = req.body.studentData;
    const letterTemplate = `
      Dear Sir/Madam,

      I am writing to recommend ${studentData.name} for any opportunity that requires a dedicated, hardworking, and talented individual. I have had the pleasure of teaching ${studentData.name} in my ${studentData.degree} course, and I can confidently say that they are one of the most exceptional students I have ever had.

      [Write the recommendation here with the student's name, student ID, faculty, degree, GPA, sports, and Discipline. Make sure to write at least 3-4 paragraphs about the student's achievements, skills, and character and also have bad things that should mention and explain like deciplene.]

      Best regards,
      NSBM Green University, Faculty of ${studentData.faculty}
    `;

    const translationResponse = await translationApi.translateText({
      q: letterTemplate,
      targetLanguageCode: 'en',
      format: 'text',
      key: apiKey
    });

    const generatedLetter = translationResponse.data.translations[0].translatedText;

    res.status(200).json({
      success: true,
      data: generatedLetter
    });
  } catch (error) {
    console.error('Error generating letter:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while generating the letter.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Readline interface to get student ID from terminal
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter student ID: ', async (studentId) => {
  rl.close();

  try {
    const response = await axios.post('http://localhost:3005/api/fetch-student', { studentId });
    const { success, data, message } = response.data;

    if (success) {
      console.log('Fetched student data:');
      console.log('Name:', data.name);
      console.log('Student ID:', data.studentId);
      console.log('Degree:', data.degree);
      console.log('GPA:', data.gpa);
      console.log('Sports:', data.sports);
      console.log('Faculty:', data.faculty);
      console.log('Discipline:', data.Discipline);

      // Generate the letter
      const letterResponse = await axios.post('http://localhost:3005/api/generate-letter', { studentData: data });
      const { success: letterSuccess, data: letterData, message: letterMessage } = letterResponse.data;

      if (letterSuccess) {
        console.log('Generated letter:');
        console.log(letterData);
      } else {
        console.error('Error generating letter:', letterMessage);
      }
    } else {
      console.error('Error fetching student data:', message);
    }
  } catch (error) {
    console.error('Error fetching student data or generating letter:', error);
  }
});