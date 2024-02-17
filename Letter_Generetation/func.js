const express = require("express");
const dotenv = require('dotenv');
const axios = require('axios');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Replace with your OpenAI API key (store securely outside the code)
const openaiApiKey = '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';

dotenv.config(); // Load environment variables from .env file (optional)

const app = express();
app.use(express.json());

app.post("/generateLetter", async (req, res) => {
  try {
    // Prompt user for student ID or use request body if provided
    const studentId = req.body.studentId || (await promptUserForInput("Enter student ID: "));

    // Fetch student details from MongoDB
    const studentData = await fetchStudentData(studentId);
    if (!studentData) {
      return res.status(404).json({ error: "Student not found." });
    }

    // Validate required fields (can be customized)
    const requiredFields = ["name", "studentnumber", "degree"];
    const missingFields = requiredFields.filter(field => !studentData[field]);
    if (missingFields.length > 0) {
      return res.status(400).json({
        error: `Missing required student data fields: ${missingFields.join(', ')}`
      });
    }

    // Construct OpenAI prompt with retrieved student details
    const prompt = `Write a recommendation letter for a master's degree program for student ${studentData.name} (ID: ${studentData.studentnumber}) who graduated with a ${studentData.degree} and ${studentData.gpa ? `(GPA: ${studentData.gpa})` : ''}. Include their participation in ${studentData.sports} and affiliation with the Faculty of ${studentData.faculty}.`;

    // Generate letter using OpenAI (use a more appropriate model if needed)
    const openaiClient = new openai.OpenAIApi(new openai.ApiKey(openaiApiKey));
    const response = await openaiClient.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 1500,
      n: 1,
      stop: null,
      temperature: 0.7,
    });

    const generatedLetter = response.choices[0].text.trim();

    // Display personalized letter and optional JSON response
    console.log("Recommendation letter for", studentData.name, "(ID:", studentId, "):");
    console.log(generatedLetter);
    res.json({ letter: generatedLetter });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred." });
  }
});

// Function to prompt the user for input
async function promptUserForInput(message) {
  return new Promise((resolve) => {
    readline.question(message, (answer) => {
      resolve(answer.trim());
      readline.close();
    });
  });
}

// Function to fetch student data from MongoDB (replace with your implementation)
async function generateLetterRecommendation(studentData) {
  const { studentname, studentnumber, studentdegree, studentgpa, studentsports, studetfaculty } = studentData;

  try {
    // Construct the user prompt based on provided information
    const upromt = `Write a letter about a student named ${studentname} with student number ${studentnumber} who studied ${studentdegree} with a GPA of ${studentgpa} and participated in ${studentsports} at our university. The letter should be written from the perspective of the Dean of the ${studetfaculty} faculty as a recommendation for a master's degree. Address the letter to "Dear Sir/Madam" and avoid including the recipient's designation or sender's designation.`;

    // Send the prompt to OpenAI and extract the generated content
    const response = await openaiClient.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{
        "role": "user",
        "content": upromt
      }]
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error generating letter:", error);
    throw error; // Re-throw for handling in calling code
  }
}
const port = process.env.PORT || 3000;
app.listen(port, () => {
  //console.log(`Server listening on port ${port}`);
});