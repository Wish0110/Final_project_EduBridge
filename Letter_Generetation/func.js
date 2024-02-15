const express = require("express");
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();
app.use(express.json());

// Student findOne route
app.get("/findOne", (req, res) => {
  // Get the student ID from the request parameters
  const studentid = req.query.studentid;

  // Convert the user input to a number
  const studentidNumber = parseInt(studentid);

  if (!studentidNumber) {
    return res.status(400).json({ error: "Invalid student ID" });
  }

  const data = JSON.stringify({
    "collection": "students",
    "database": "studentrecords",
    "dataSource": "Cluster0",
    "filter": {
      "studentid": studentidNumber // Use the converted studentidNumber
    }
  });

  const config = {
    method: 'post',
    url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-zwwqd/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'sk-ppRgnW4sLsdD9jU8D8K5T3BlbkFjacIpmzQPQv8Hr7ZEthBx',
      'Accept': 'application/ejson'
    },
    data
  };

  axios(config)
    .then(function (response) {
      if (response.data.document) {
        const student = response.data.document;
        const name = student.name;
        const studentid = student.studentid;
        const degree = student.degree;

        console.log(name, studentid, degree);

        res.status(200).json({ name, studentid, degree });
      } else {
        console.log('No student found with the given studentid');

        res.status(404).json({ error: "Student not found" });
      }
    })
    .catch(function (error) {
      console.log(error);

      res.status(500).json({ error: "An error occurred while finding the student" });
    });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
//});
//prompting end

/*
//dn me tyna eke student number eka ghuwama data enw
//dn aye mekat letter generate wena mn function ekk widyt add krnw api ekk neme function ekk dammaam
//postman one na eka kelinma terminal eke run wenw sirt mehema pennanna plwnne api ekath tynw ekath hdala denm daant functuion ekk widiyt hdmu


///letter generation
// Import required libraries
const openai = require('openai');

// Initialize OpenAI with your API key (stored securely outside the code)

const apiKey = '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';

const openaiClient = new openai({apiKey});

// Function to generate letter recommendation
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

// Example usage:
const studentData = {
  studentname: "John Doe",
  studentnumber: "123456",
  studentdegree: "Software Engineering",
  studentgpa: 3.8,
  studentsports: "Basketball",
  studetfaculty: "Engineering"
};

generateLetterRecommendation(studentData)
  .then(letterContent => {
    console.log("Generated letter recommendation:\n", letterContent);
  })
  .catch(error => {
    console.error("Error generating letter:", error);
  });


///letter generation end

*/