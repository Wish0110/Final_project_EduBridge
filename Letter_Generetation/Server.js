const express = require("express");
const OpenAI = require("openai");
const axios = require('axios');

const app = express();
app.use(express.json());

const openai = new OpenAI({
  apiKey: "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"
})

async function getStudentDetails(studentId) {
  // ... (rest of your getStudentDetails function)
}

app.get('/getResponse', async (req, res) => {
  try {
    // Prompt user for student ID (unchanged)

    const studentIdResponse = await inquirer.prompt({
      type: 'input',
      name: 'studentId',
      message: 'Enter student ID:',
    });

    const studentId = studentIdResponse.studentId;

    // Fetch student details (unchanged)
    const student = await getStudentDetails(studentId);
    if (!student) {
      res.status(404).json({ error: 'Student not found' });
      return;
    }

    const { name, studentid, degree, gpa, sports, faculty } = student;

    // Use dynamic import for inquirer
    const inquirer = await import('inquirer');

    const prompt = `i want to write a letter about a student named ${name} with the student number ${studentid} who studied ${degree} with a GPA of ${gpa} and did ${sports} in our university as a dean of the faculty as a recommendation for a master's degree. Add recipient as Dear Sir/Madam, sender is Dean Faculty of ${faculty}. Please don't add recipients or sender's designation, and avoid using brackets in the spaces.`;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{
        "role": "user",
        "content": prompt
      }]
    });

    console.log(response.choices[0].message.content);
    res.send(response.choices[0].message.content);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
