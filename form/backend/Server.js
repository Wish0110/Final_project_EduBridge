const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors({ // Apply CORS middleware
    origin: 'http://localhost:3000' // Allow requests from this origin
  }));
  
app.use(express.json());

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
        'api-key': 'n7FEsXAd5f1vccyEEFrGEBvDO9oqeRJmi4r5ljf2OIr7pIlr5qJBNR7biXSvsCR2'
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
          studentId: student.studentid
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});