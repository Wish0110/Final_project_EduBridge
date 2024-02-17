const express = require("express");
const dotenv = require('dotenv');

dotenv.config();

//const OpenAI = require("openai");
const app = express();
app.use(express.json());

// mongdo db data api 


//var axios = require('axios');

//to prompt the student id from the user
const openai = require('openai');

// Initialize OpenAI with your API key (stored securely outside the code)

const apiKey = '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';

const openaiClient = new openai({apiKey});

const axios = require('axios');
//const openaiClient = require('openai')('YOUR_OPENAI_API_KEY'); // Replace with your actual API key

app.listen(3000, () => {
  // Commented server log removed
});

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt for student ID
readline.question('Enter student ID: ', (studentid) => {
  readline.close();

  // Function to fetch student data from MongoDB
  function getStudentData(studentid) {
    const data = JSON.stringify({
      "collection": "students",
      "database": "studentrecords",
      "dataSource": "Cluster0",
      "filter": {
        "studentid": studentid
      }
    });

    const config = {
      method: 'post',
      url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-zwwqd/endpoint/data/v1/action/findOne',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'n7FEsXAd5f1vccyEEFrGEBvDO9oqeRJmi4r5ljf2OIr7pIlr5qJBNR7biXSvsCR2',
        'Accept': 'application/ejson'
      },
      data
    };

    return axios(config)
      .then(response => response.data.document)
      .catch(error => {
        console.error('Error fetching student data:', error);
        return null; // Or handle the error differently
      });
  }

  // Function to generate letter recommendation
  async function generateLetterRecommendation(student) {
    if (!student) {
      console.log('No student found with the given studentid');
      return;
    }

    const { name, studentid, degree } = student;

    try {
      const prompt = `Write a letter about a student named ${name} with student number ${studentid} who studied ${degree} with a GPA of 3.7 and participated in cricket at our university. The letter should be written from the perspective of the Dean of the Computing faculty as a recommendation for a master's degree. Address the letter to "Dear Sir/Madam" and avoid including the recipient's designation or sender's designation.`;

      const response = await openaiClient.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{
          "role": "user",
          "content": prompt
        }]
      });

      const letterContent = response.choices[0].message.content;
      console.log(letterContent); // Output the generated letter

    } catch (error) {
      console.error("Error generating letter:", error);
    }
  }

  // Use the data and call the letter generation function
  getStudentData(studentid)
    .then(student => generateLetterRecommendation(student))
    .catch(error => console.error('Error:', error));
});

