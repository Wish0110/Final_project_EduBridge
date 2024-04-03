const express = require("express");
const app = express();
const axios = require('axios');
app.use(express.json());


app.get('/getStudentDetails', async (req, res) => {
  try {
    const { studentid } = req.query;
    const response = await axios({
      method: 'post',
      url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-zwwqd/endpoint/data/v1/action/findOne',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'n7FEsXAd5f1vccyEEFrGEBvDO9oqeRJmi4r5ljf2OIr7pIlr5qJBNR7biXSvsCR2',
        'Accept': 'application/ejson'
      },
      data: {
        "collection": "students",
        "database": "studentrecords",
        "dataSource": "Cluster0",
        "filter": {
          "studentid": studentid
        }
      }
    });

    const student = response.data.document;
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ error: 'Student not found.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});